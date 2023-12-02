import * as React from "react";
import { motion } from "framer-motion";
import { IconButton, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import { Link } from "react-router-dom";



const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex justify-center items-center">
      <IconButton className="icon-placeholder"  style={style}>
        {
        (i===0 && <Link className="flex justify-center" to='/dashboard/myprofile'><PermIdentityIcon/></Link>) 
        || (i===1 && <Link className="flex justify-center" to='/dashboard/mycart'><ShoppingCartIcon/></Link>) 
        || (i===2 && <Link className="flex justify-center" to='/home'><HomeOutlinedIcon/></Link>) 
        || (i===3 && <Link className="flex justify-center" to='/dashboard/myprofile'><InsightsOutlinedIcon/></Link>)
        }
        </IconButton>
      <Typography className="text-placeholder" style={style}>ada<MenuIcon/></Typography>
      </div>
    </motion.li>
  );
};
