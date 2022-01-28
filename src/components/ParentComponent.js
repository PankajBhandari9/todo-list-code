import { Container, Fab, Grid, Hidden, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useRef, useState } from 'react';
import AddList from './AddList';
import UpdateList from './UpdateList';
import useStyles from './Themes';

const ParentComponent = () => {
    const LOCAL_STORAGE_KEY = "list";

    const [list, setlist] = useState([]);
    const [inputText, setinputText] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const textFind = useRef(null);


    useEffect(() => {
        document.title="Todo List";
        const retriveList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveList) setlist(retriveList);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
    }, [list]);

    const focusInput = useRef(null);
    const handleForm = (e) => {
        e.preventDefault();
        if (inputText === null || inputText.length < 4) {
            alert("Please write more then 3 character");
        }
        else {
            setlist([...list, { id: new Date().toString(), name: inputText }])
            setinputText("");
        }
    }

    const deleteMe = (id) => {
        const newList = list.filter((el) => {
            return el.id !== id;
        })
        setlist(newList);
    }

    const edit = (id) => {
        setIsEdit(true);
        textFind.current = list.find((em) => {
            return em.id === id
        });

        setinputText(textFind.current.name);
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        const newL = list.map(em => {
            if (em.id === textFind.current.id) {
                return em = { id: textFind.current.id, name: inputText };
            }
            else {
                return em;
            }
        });

        setlist(newL);
        setIsEdit(false);
        setinputText("");
    }

    const getText = (e) => {
        setinputText(e.target.value);
    }


    const styles = useStyles();

    return <Container className={styles.parentMargin}>

        {
            isEdit ? <UpdateList
                handleUpdate={handleUpdate}
                inputText={inputText}
                getText={getText}
                focusInput={focusInput}
            />
                :
                <AddList
                    handleForm={handleForm}
                    getText={getText}
                    inputText={inputText}
                    focusInput={focusInput}
                />

        }
        {
            list.map((el) => {
                return <Typography variant="body1"
                    key={el.id}
                >
                    <Grid container className={styles.todoList}>
                        {/* desktop device */}
                        <Hidden only={["xs","sm"]}>


                        <Grid item xs={8} className={styles.dataPartDesk}>
                            {el.name}
                        </Grid>

                        <Grid xs={4} item className={styles.buttons}>
                            <Fab
                                className={styles.fabDelete}
                                variant="contained"
                                onClick={() => deleteMe(el.id)}><DeleteIcon /></Fab>
                            <Fab
                                className={styles.fabEdit}
                                variant="outlined"
                                onClick={() => edit(el.id)}><EditIcon /></Fab>

                        </Grid>

                        </Hidden>
                        {/* mobile device */}
                        <Hidden only={["md","lg","xl"]}>

                            <Grid item xs={8} className={styles.dataPartMob}>
                                {el.name}
                            </Grid>

                            <Grid xs={4} item className={styles.buttons}>
                                <Fab
                                size="small"
                                    className={styles.fabDelete}
                                    variant="contained"
                                    onClick={() => deleteMe(el.id)}><DeleteIcon fontSize="small"/></Fab>
                                <Fab
                                    size="small"
                                    className={styles.fabEdit}
                                    variant="outlined"
                                    onClick={() => edit(el.id)}><EditIcon fontSize="small" /></Fab>

                            </Grid>
                        </Hidden>
                    </Grid>
                </Typography>
            })
        }
    </Container>;
};

export default ParentComponent;
