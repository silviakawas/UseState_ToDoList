import { useState } from "react";
import { StyledContainer, StyledH2Tab, StyledInput, StyledInputContainer, StyledInputImage, StyledInputImgContainer, StyledListContainer, StyledLogoContainer, StyledTab, StyledTab2, StyledTabFilter, StyledTabH3, StyledTitle } from "./styles";
import { v4 } from "uuid";

const List = () =>{

    const [tasks, setTasks] = useState([
        {
            id: v4(),
            task: 'Complete online JavaScript course',
            complete: false
        },
        {
            id: v4(),
            task: 'Jog around the park 3x',
            complete: false
        },
        {
            id: v4(),
            task: '10 minutes meditation',
            complete: false
        },
        {
            id: v4(),
            task: 'Read for 1 hour',
            complete: false
        },
        {
            id: v4(),
            task: 'Pick up groceries',
            complete: false
        },
        {
            id: v4(),
            task: 'Complete Todo App on Frontend Mentor',
            complete: false
        }
    ]);

    const [filter, setFilter] = useState('All');

    const filteredTasks = filterTabsByActive(filter, tasks);

    const clearCompletedTasks = () =>{
        const updatedTasks = tasks.filter(task => !task.complete);
        setTasks(updatedTasks);
    };

    const [newTodoText, setNewTodoText] = useState('');

    const handleKeyDown = e => {
        if(e.keyCode === 13) {
            const newTask = {
                id: v4(),
                task: newTodoText,
                complete: false
            };
            setTasks([...tasks, newTask]);
            setNewTodoText('');
        }
    };

    return(
        <>
            <StyledContainer>
                <StyledListContainer>
                    <StyledLogoContainer>
                        <StyledTitle>TODO</StyledTitle>
                    </StyledLogoContainer>
                    <StyledInputContainer>
                        <StyledInputImgContainer
                            onClick = {() => buttonHandle(tasks, setTasks)}
                            active= {tasks.complete}>
                            <StyledInputImage src='public/icon-check.svg'/>
                        </StyledInputImgContainer>
                        <StyledInput 
                            placeholder='Create a new todo...'
                            onChange={e => setNewTodoText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            />
                    </StyledInputContainer>
                    {filteredTasks.map(task => (
                        <>
                            <StyledTab key={task.id}>
                                <StyledInputImgContainer
                                    onClick={()=> buttonHandle(tasks, setTasks, task.id)}
                                    active={task.complete}>
                                        <StyledInputImage src='public/icon-check.svg'/>
                                </StyledInputImgContainer>
                                <StyledH2Tab active={task.complete}>{task.task}</StyledH2Tab>
                            </StyledTab>
                        </>
                        
                    ))}

                    <StyledTab2>
                        <StyledTabH3>
                            {filteredTasks.filter(task => !task.complete).length}
                        </StyledTabH3>
                        <StyledTabFilter>
                            <StyledTabH3 onClick={()=> setFilter('All')}>
                                All
                            </StyledTabH3>
                            <StyledTabH3 onClick={()=> setFilter('Active')} >
                                Active
                            </StyledTabH3>
                            <StyledTabH3 onClick={()=> setFilter('Completed')}>
                                Completed
                            </StyledTabH3>
                        </StyledTabFilter>
                        <StyledTabH3 onClick={clearCompletedTasks}>
                            Clear Completed
                        </StyledTabH3>
                    </StyledTab2>
                    
                </StyledListContainer>
            </StyledContainer>
        </>
    );

};

const buttonHandle = (tasks, setTasks, taskId) => {
    const newTasks = tasks.map(task => {
        if(task.id === taskId) {
            task.complete = !task.complete;
        }
        return task;
    });

    setTasks(newTasks);
};

const filterTabsByActive = (filter, tasks) => {
    let filteredTasks = [...tasks];
    filteredTasks = 
        filter === 'All'
            ? filteredTasks
            : filteredTasks.filter(task => {
                if (filter === 'Active'){
                    return !task.complete;
                }else if(filter === 'Completed'){
                    return task.complete;
                }
                return task.complete;
            });

            return filteredTasks;
};


export default List;