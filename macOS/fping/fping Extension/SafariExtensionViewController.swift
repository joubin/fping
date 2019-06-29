//
//  SafariExtensionViewController.swift
//  fping Extension
//
//  Created by Joubin Jabbari on 6/28/19.
//  Copyright © 2019 Joubin Jabbari. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:100)
        return shared
    }()
    


}
