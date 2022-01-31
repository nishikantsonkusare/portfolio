import React from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from 'react-hook-form';
import { TextField, Typography, Button, Grid } from '@mui/material';
import { Send } from '@mui/icons-material';
import emailjs from "@emailjs/browser";
import{ init } from '@emailjs/browser';
import swal from "sweetalert";

const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required for contact futher."),
    subject: yup.string().required("Subject is required for contact."),
    message: yup.string().required("Please write message for me.")
});

const defaultValue = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

const ContactForm = () => {

    const { control, reset, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) =>{

        init(process.env.REACT_APP_USER_ID);

        const templeteParams = {
            from_name: data.name,
            message: data.message,
            email: data.email,
            reply_to: process.env.REACT_APP_REPLY_TO
        };

        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templeteParams, process.env.REACT_APP_USER_ID)
            .then( res => {
                swal({
                    title: "Success!",
                    text: "Message is successfully send to Nishikant.",
                    icon: "success",
                    button: "Aww yiss!",
                });
            }, (err) => {
                console.log("Failure", err );
            });
        reset(defaultValue);
    }

  return (
      <form onSubmit={handleSubmit(onSubmit)} sx={{ p: 5 }}>
        <Grid container spacing={2}>
           <Grid item xs={12} md={6}>
                <Controller
                    render={({ field, formState })=> (
                        <TextField
                            {...field}
                            label="Name"
                            fullWidth
                            autoFocus
                            required
                            margin='normal'
                            error={Boolean(formState.errors?.name)}
                            helperText={formState.errors.name?.message}
                        />
                    )}

                    control={control}
                    name='name'
                    defaultValue={defaultValue.name}
                />
           </Grid>
           <Grid item xs={12} md={6}>
                <Controller
                    render={({ field, formState })=> (
                        <TextField
                            {...field}
                            label="Email"
                            type="email"
                            fullWidth
                            required
                            margin='normal'
                            error={Boolean(formState.errors?.email)}
                            helperText={formState.errors.mobile?.message}
                        />
                    )}

                    control={control}
                    name='email'
                    defaultValue={defaultValue.email}
                />
           </Grid>
           <Grid item xs={12}>
                <Controller
                    render={({ field, formState })=> (
                        <TextField
                            {...field}
                            label="Subject"
                            fullWidth
                            required
                            margin='normal'
                            error={Boolean(formState.errors?.subject)}
                            helperText={formState.errors.subject?.message}
                        />
                    )}

                    control={control}
                    name='subject'
                    defaultValue={defaultValue.subject}
                />
           </Grid>
           <Grid item xs={12}>
                <Controller
                    render={({ field, formState })=> (
                        <TextField
                            {...field}
                            label="Message"
                            fullWidth
                            required
                            multiline
                            rows={4}
                            margin='normal'
                            error={Boolean(formState.errors?.message)}
                            helperText={formState.errors.message?.message}
                        />
                    )}

                    control={control}
                    name='message'
                    defaultValue={defaultValue.message}
                />
           </Grid>
        </Grid>
            <Typography align='center' py={3}>
                <Button type="submit" variant="contained" color="secondary" sx={{width: "50%"}} endIcon={ <Send />} >
                    Send
                </Button>
            </Typography>
      </form>
  );
};

export default ContactForm;
