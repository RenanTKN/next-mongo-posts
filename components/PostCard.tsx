import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

import { Post, User } from "../models/types";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const author = post.author as unknown as User;

  return (
    <Card>
      <CardHeader
        avatar={
          author.name ? (
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              {author.name[0].toUpperCase()}
            </Avatar>
          ) : null
        }
        title={post.title}
        subheader={author.name}
      />
      <Divider />
      <CardContent>
        <Typography variant="body2">{post.content}</Typography>
      </CardContent>
    </Card>
  );
}
