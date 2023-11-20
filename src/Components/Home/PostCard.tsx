import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useDataFetcher from '../../CustomHooks/useDataFetcher';
import Swal from 'sweetalert2';
import { AddShoppingCart } from '@mui/icons-material';
import { axiosSecure } from '../../CustomHooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';
import useCart from '../../CustomHooks/useCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function PostCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const { _id, doner, time, title, description, img, react } = data

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [count, setCount] = React.useState(true)
  const [addCart, setAddCart] = React.useState(true)
  const reactCounter = () => {

    if (count) {
      const updatedReact = react + 1
      const updatedPost = { doner, time, title, description, img, updatedReact }
      console.log(updatedPost);
      axiosSecure.put(`/posts/${_id}`, updatedPost)
        .then(function (response) {
          console.log(response.data);
          if (response.data.acknowledged) {
            setCount(!count)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      // fetch(`http://localhost:5000/posts/${_id}`, {
      //   method: 'PUT',
      //   headers: {
      //     "content-type": "application/json"
      //   },
      //   body: JSON.stringify(updatedPost)
      // })
      //   .then((res) => res.json())
      //   .then(data => {
      //     console.log("post updated", data);
      //     if (data.acknowledged) {
      //       setCount(!count)
      //       refetch()
      //     }
      //   })
    } else {
      const updatedReact = react - 1
      const updatedPost = { doner, time, title, description, img, updatedReact }
      console.log(updatedPost);

      axiosSecure.put(`/posts/${_id}`, updatedPost)
        .then(function (response) {
          console.log(response.data);
          if (response.data.acknowledged) {
            setCount(!count)
            refetch()
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }


  }
  const { user } = React.useContext(AuthContext)
  const [usersData, , refetch] = useCart()//it is important how many things u return from that hook...[usersData,refetch] can not get the refetch funtion
  const { cartList } = usersData

  const handlaAddCart = (id) => {
    console.log("id is", id);

    const alreadyAddedItem = cartList.includes(id)
    console.log(alreadyAddedItem, "already")

    if (alreadyAddedItem === false) {
      const updatedCart = [...cartList, id]
      const userMail = user?.email
      const likedPost = []
      const updatedPost = { userMail, updatedCart, likedPost }
      console.log(updatedPost);
      axiosSecure.put(`/updateUser/${user?.email}`, updatedPost)
        .then(function (response) {
          console.log(response.data);
          if (response.data.acknowledged) {
            toast.success('Added to cart successfully')
            refetch()
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      toast.error('Already Added in your cart list')
    }

  }






  return (
    <Card sx={expanded ? { maxHeight: 800, minWidth: 345, marginY: 4 } : { maxHeight: 420, minWidth: 345, marginY: 4 }}>
     <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={doner}
        subheader={time}
      />
      {/* TODO: customize the image part so that it shows fixed hight without dependencies */}
      <CardMedia
        component="img"
        height="196"
        image={img}
        alt="Product"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={reactCounter}>
          {count ? <FavoriteIcon /> : <FavoriteIcon color='error' />}
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handlaAddCart(_id)}>
          <AddShoppingCart />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      {react && <CardContent><Typography>{react}</Typography></CardContent>}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
          {/* <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography> */}
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}










