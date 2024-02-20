import styles from './userInfo.module.css';
import {useGetUserInfoQuery} from "../../../store/services/singlePostApi.ts";
import CustomImage from "../../atoms/Image/CustomImage.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";

interface UserInfoProps {
    userId: number
}

function UserInfo({userId}:UserInfoProps) {
    const {data, error, isLoading} = useGetUserInfoQuery(userId)

    return (
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <div className={styles.userInfo}>
                    <div className={styles.avatar}>
                        <CustomImage source={data.image} altText={"avatar"}/>
                    </div>
                    <div className={styles.info}>
                        <Heading headingLevel={"p"} headingStyles={styles.written}>Written By</Heading>
                        <Heading headingLevel={"p"} headingStyles={styles.name}>
                            {`${data.firstName} ${data.lastName}`}
                        </Heading>
                    </div>
                </div>
            ) : null
            }
        </div>
    );
}

export default UserInfo;