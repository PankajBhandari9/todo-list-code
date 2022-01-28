import { makeStyles } from '@mui/styles';

const useStyles=makeStyles(
    {
    btnLg:{
        padding:"0.9rem",
        '&:hover':{
            backgroundColor:'#0080ff',
            fontWeight:"bold",
            boxShadow:"10px 10px 15px gray"
        }
    },
    btnSm:{
        padding:"0.45rem",
        '&:hover':{
            backgroundColor:'#0080ff',
            fontWeight:"bold",
            boxShadow:"10px 10px 15px gray"
        }
    },
    dataPartDesk:{
        padding:"1.5rem",
        color:"#fff",
    },
    dataPartMob:{
        padding:"1rem",
        color:"#fff",
    },
    buttons:{
        padding:"0.6rem",
        display:"flex",
        justifyContent:"flex-end",
    },

    fabDelete:{
        margin:"0 0.5rem",
        backgroundColor:"#9AD0EC",
        '&:hover':{
            backgroundColor:"#60D0EC",
            color:"#f1f1f1",
            boxShadow:"5px 5px 10px gray"
        }
    },

    fabEdit:{
        margin:"0 0.5rem",
        backgroundColor:"#EBE645",
        '&:hover':{
            backgroundColor:"#DD4A48",
            color:"#f1f1f1",
            boxShadow:"5px 5px 10px gray"
        }
    },

    // backgroundColor:`#161853`, Math.floor(Math.random()*16777215).toString(16)
    // backgroundColor:`#${Math.floor(Math.random()*16777215).toString(16)}`,

    todoList:{
        marginTop:"2rem",
        backgroundImage:`linear-gradient(#161853,#${Math.floor(Math.random()*16777215).toString(16)})`,
        // backgroundColor:`#161853`,
        borderRadius:"0.5rem",
        transition:"ease-in-out 0.5s",
        '&:hover':{
            backgroundImage:`linear-gradient(#292C6D,#${Math.floor(Math.random()*16777215).toString(16)})`,
            // backgroundColor:"#292C6D",
        }
    },
    parentMargin:{
        marginTop:"6rem",
        backgroundColor:"#afd5ff",
        paddingBottom:"2rem",
        borderRadius:"30px",
    },
    todoHeading:{
        background:`linear-gradient(#292C6D,#${Math.floor(Math.random()*16777215).toString(16)})`,
        "-webkit-background-clip":"text",
        "-webkit-text-fill-color":"transparent",
        fontFamily:"'Nanum Gothic', sans-serif",
        // fontWeight:"bold",
        fontStyle:"italic"
    }
});

export default useStyles;