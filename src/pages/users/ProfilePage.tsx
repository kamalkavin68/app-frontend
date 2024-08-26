import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const ProfileContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
}));

const Name = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: theme.palette.text.primary,
    textAlign: 'center',
}));

const InfoText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: theme.palette.text.primary,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
}));

function ProfilePage() {
    const user = {
        displayName: "Kavin",
        email: "kamalkavin68@gmail.com",
        isActive: false,
        username: "Kavin",
        bio: "Software developer with a passion for creating innovative solutions.",
        location: "Chennai, India",
        occupation: "Software Developer",
        phone: "+91 9876543210",
    };

    return (
        <div style={{ height: "100%", padding: "16px" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} >
                        <ProfileContainer>
                            <AvatarContainer>
                                <Avatar sx={{ width: 120, height: 120 }}>K</Avatar>
                            </AvatarContainer>
                            <Name>{user.displayName || user.username}</Name>
                            <InfoText>@{user.username}</InfoText>
                            <InfoText>{user.location}</InfoText>
                            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                Edit Profile
                            </Button>
                            <Divider sx={{ my: 3 }} />
                            <SectionTitle>About</SectionTitle>
                            <InfoText>{user.bio}</InfoText>
                            <SectionTitle>Contact Information</SectionTitle>
                            <InfoText>Email: {user.email}</InfoText>
                            <InfoText>Phone: {user.phone}</InfoText>
                            <SectionTitle>Professional Information</SectionTitle>
                            <InfoText>Occupation: {user.occupation}</InfoText>
                        </ProfileContainer>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default ProfilePage;
