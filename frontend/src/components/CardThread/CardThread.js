import React, { useEffect } from "react";
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import threadAPI from "../../config";
import { ThreadGet } from "../../store/services/ThreadSlice";

const CardThread = () => {
    const { threads } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ThreadGet());
    }, [dispatch]);

    return (
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',margin:'20px auto'}}>
                {threads ? threads.map((thread) => {
                return (
                    <Card style={{backgroundColor: 'gray', marginBottom:'10px',width:'800px'}} key={thread.id}>
                        {thread.image ? <Card.Img style={{maxWidth:'150px', maxHeigth:'150px'}} src={`${threadAPI}/uploads/${thread.image}`} /> : null}
                        <Card.Body>
                            <Card.Title>{thread.author !== '' ? thread.author : 'Anonymus'}</Card.Title>
                            <Card.Text>
                                {thread.message}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }): <b>Сообщения отсутствуют</b>}
            </div>
    )
}

export default CardThread;