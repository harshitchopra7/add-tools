import React, { useState } from "react";
import "./ProductSelectionPage.css";
import ProductSelectionLeft from "../components/ProductSelectionLeft/ProductSelectionLeft";
import Button from "../components/Button/Button";

function ProductSelectionPage() {

    const [tools, setTools] = useState([]);
    const [toolInput, setToolInput] = useState("");

    const addTool = (e) => {
        e.preventDefault()
        if (toolInput.length > 0) {
            if(tools.length <= 4) {
                setTools([...tools, {name: toolInput, image: getImage(toolInput)}])
            }
            else {
                alert("Cannot add more than 4 tools")
            }
            setToolInput("")
        }
    }

    const toolInputHandler = (e) => {
        setToolInput(e.target.value)
    }

    const getImage = (name) => {
        switch(name.toUpperCase()) {
            case "NOTION":
                return "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224";
            case "JIRA":
                return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZ262OQgdJ7AcPWtFqVKQ5q7IlKJWsKEdr-ymRwEpWA2HDOPtjy9CMtZB3Lj1pbEoi_s&usqp=CAU";
            case "SLACK":
                return "https://images.pling.com/img/00/00/07/28/00/1422594/e20d4a4b5d23357c5ace1844206c6b02e082e73231a16f9036cb8e3bf109d52816bd.png";
            case "MS AZURE":
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png";
        }
    }

  return (
    <div className="product_selection_page">
        <div className="product_selection_page_left">
            <ProductSelectionLeft 
                tools={tools}
                setTools={setTools}
                filled={tools.length}
                notFilled={4-tools.length}
                plus_logo="https://img.icons8.com/external-dreamstale-lineal-dreamstale/15/000000/external-plus-science-education-dreamstale-lineal-dreamstale.png" 
            /> 
        </div>
        <div className="product_selection_page_right">
        <div className="product_selection_right">
            <div className="product_selection_right_count">
                <p>1 of 3</p>
            </div>
            <div className="product_selection_right_desc">
                <p className="product_selection_right_desc1">Let's add your internal tools</p>
                <div className="product_selection_right_desc2">
                    <p>Search to quickly add products your team uses today.</p>
                    <p>You'll be able to add as many as you need later but for now let's add four.</p>
                </div>
            </div>
            <div className="product_selection_right_input">
                <input list="browsers" 
                    placeholder="Search for any software" 
                    name="browser" 
                    id="browser" 
                    value={toolInput}
                    onChange={toolInputHandler}
                />
                <datalist className="product_selection_right_options" id="browsers">
                    <option value="Notion">Notion</option>
                    <option value="Jira">Jira</option>
                    <option value="Slack">Slack</option>
                    <option value="Ms Azure">Ms Azure</option>
                </datalist>
            </div>
            <div className="product_selection_right_button">
                <Button onClick={addTool} />
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProductSelectionPage