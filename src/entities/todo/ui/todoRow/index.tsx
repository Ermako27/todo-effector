import { Row, Col} from "antd";
import cn from "classnames";
import styles from "./styles.module.css";


export type TodoRowProps = {
    id: number;
    title: string;
    completed: boolean;
    children?: React.ReactNode;
}

export const TodoRow: React.FC<TodoRowProps> = ({
    id,
    title,
    completed,
    children
}: TodoRowProps) => {
    return (
        <Col key={id} span={24}>
            <Row className={cn(styles.root, { [styles.completed]: completed })}>
                {title}
                {children}
            </Row>
        </Col>
    )
}
