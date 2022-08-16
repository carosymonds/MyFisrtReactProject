import React from "react";
import './TodosLoading.css';
import ContentLoader from "react-content-loader";

function TodosLoading(props){
    return (
        
        // <div className="LoadingTodo-container">
        //     {/* <span className="LoadingTodo-completeIcon"></span>
        //     <p className="LoadingTodo-text">Page is loading...</p>
        //     <span className="LoadingTodo-deleteIcon"></span> */}
        //     <div class="container">
        //         <div class="background">
        //             <div class="left">
        //                 <div class="image"></div>
        //                 <div class="mask thick"></div>
        //             </div>
        //             <div class="right">
        //                 <div class="bar"></div>
        //                 <div class="mask thick"></div>
        //                 <div class="bar"></div>
        //                 <div class="mask thin"></div>
        //                 <div class="bar medium"></div>
        //                 <div class="mask thick"></div>
        //                 <div class="bar small"></div>
        //             </div>
        //         </div>
        //  </div>
        //  </div>
        <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
        {...props}
      >
        <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
      </ContentLoader>
    )
}

export {TodosLoading};