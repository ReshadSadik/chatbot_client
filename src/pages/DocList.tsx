import React, { useEffect, useState } from "react";
import { axiosSecure } from "../services/api/axios";
import { Box, Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const DocList = () => {
    const [botList, setBotList] = useState([]);
    const [isFetchingBotList, setIsFetchingBotList] = useState(false);

    useEffect(() => {
        fetchBotsList();
    }, []);

    const fetchBotsList = async () => {
        try {
            setIsFetchingBotList(true);
            const response = await axiosSecure.get("/chatbots");
            console.log(response.data);
            if (response.data) {
                setBotList(response.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetchingBotList(false);
        }
    };

    return (
        <Box>
            {isFetchingBotList ? (
                <p>loading bts......</p>
            ) : (
                <section className="container">
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {(botList || []).map((chatbot: any, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://botup.com/images/blog/ai-chatbot-app.png?v=1685597433119865848"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {chatbot?.botName}
                                            </Typography>
                                            <Link to={`/chat/${chatbot._id}`}>
                                                <Button sx={{ width: '100%' }} variant="outlined">
                                                    Chat With This Bot
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </section>
            )}
        </Box>
    );
};

export default DocList;
