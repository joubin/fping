//
//  SafariExtensionHandler.swift
//  fping Extension
//
//  Created by Joubin Jabbari on 6/28/19.
//  Copyright © 2019 Joubin Jabbari. All rights reserved.
//

import SafariServices

class SafariExtensionHandler: SFSafariExtensionHandler {
    
    var active : Bool = false
    
    override func messageReceived(withName messageName: String, from page: SFSafariPage, userInfo: [String : Any]?) {
        // This method will be called when a content script provided by your extension calls safari.extension.dispatchMessage("message").
//        page.getPropertiesWithCompletionHandler { properties in
//            NSLog("The extension received a message (\(messageName)) from a script injected into (\(String(describing: properties?.url))) with userInfo (\(userInfo ?? [:]))")
//        }
        
        

        PingCount.shared.setCount(value: messageName)
        
    }
    
    override func toolbarItemClicked(in window: SFSafariWindow) {
        // This method will be called when your toolbar item is clicked.
        
    }
    
    override func validateToolbarItem(in window: SFSafariWindow, validationHandler: @escaping ((Bool, String) -> Void)) {
        // This is called when Safari's state changed in some way that would require the extension's toolbar item to be validated again.
        validationHandler(true, "\(PingCount.shared.count)")
    }
    
    override func popoverViewController() -> SFSafariExtensionViewController {
        let shared = SafariExtensionViewController.shared
        return shared
    }
    
    

}

class PingCount {
    static let shared = PingCount()
    
    var count : Int
    
    private init(){
        count = 0
    }
    
    func setCount(value:String){
        count = Int(value) ?? 0
        print(count)
    }
}



