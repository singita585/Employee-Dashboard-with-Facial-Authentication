// This section of code deals with us creating the necessary cods needed for the program to
// to scan of face for face recognition

//imports that are needed
import { useEffect } from 'react';
import faceIO from '@faceio/fiojs';
import { Button, Card, CardHeader, CardTitle, CardContent } from '@shadcn/ui';
import { useToast } from '@shadcn/ui';

interface FaceAuthProps {
  onSuccessfulAuth: (data: any) => void;
}

const FaceAuth: React.FC<FaceAuthProps> = ({ onSuccessfulAuth }) => {
  const { toast } = useToast();

  useEffect(() => {
    const faceio = new faceIO(process.env.NEXT_PUBLIC_FACEIO_APP_ID);

    const enrollNewUser = async () => {
      try {
        const userInfo = await faceio.enroll({
          locale: 'auto',
          payload: {
            email: 'employee@example.com',
            pin: '12345',
          },
        });
        toast({
          title: "Success!",
          description: "You're now enrolled in the facial recognition system!",
        });
        console.log('User Enrolled!', userInfo);
      } catch (errCode) {
        toast({
          title: "Error!",
          description: "Enrollment failed. Please try again.",
          variant: "destructive",
        });
        console.error('Enrollment Failed', errCode);
      }
    };

    const authenticateUser = async () => {
      try {
        const userData = await faceio.authenticate();
        toast({
          title: "Welcome back!",
          description: "Authentication successful.",
        });
        console.log('User Authenticated!', userData);
        onSuccessfulAuth({
          name: 'John Doe',
          position: 'Software Developer',
          department: 'Engineering',
          photoUrl: 'https://example.com/john-doe.jpg',
        });
      } catch (errCode) {
        toast({
          title: "Authentication failed",
          description: "Please try again or enroll.",
          variant: "destructive",
        });
        console.error('Authentication Failed', errCode);
      }
    };

    const enrollBtn = document.getElementById('enroll-btn');
    const authBtn = document.getElementById('auth-btn');

    if (enrollBtn) enrollBtn.onclick = enrollNewUser;
    if (authBtn) authBtn.onclick = authenticateUser;

    return () => {
      if (enrollBtn) enrollBtn.onclick = null;
      if (authBtn) authBtn.onclick = null;
    };
  }, [toast, onSuccessfulAuth]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Facial Authentication</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button id="enroll-btn" variant="outline" className="w-full">
          Enroll New Employee
        </Button>
        <Button id="auth-btn" variant="default" className="w-full">
          Authenticate
        </Button>
      </CardContent>
    </Card>
  );
};

export default FaceAuth;