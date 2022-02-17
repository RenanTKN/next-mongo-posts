import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

import { Post, User } from "../models/types";
import Link from "./Link";
import PostCard from "./PostCard";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  const posts = user.posts as unknown as Post[];

  return (
    <>
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              {user.name[0].toUpperCase()}
            </Avatar>
          }
          title={user.name}
        />
        <Divider />
        <CardContent>
          <Typography variant="body2" gutterBottom>
            ID: {user._id}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Email: {user.email}
          </Typography>
        </CardContent>
      </Card>
      {posts.length ? (
        <>
          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Posts:
          </Typography>
          <Grid container direction="column" spacing={3}>
            {posts.map((post) => (
              <Grid item key={post._id}>
                <Link href={`/posts/${post._id}`}>
                  <PostCard post={post} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          Usuário ainda não possui posts
        </Typography>
      )}
    </>
  );
}
