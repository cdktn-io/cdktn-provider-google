/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { ChronicleFeedDetails, 
chronicleFeedDetailsToTerraform, 
chronicleFeedDetailsToHclTerraform, 
ChronicleFeedDetailsOutputReference, 
ChronicleFeedFailureDetails, 
chronicleFeedFailureDetailsToTerraform, 
chronicleFeedFailureDetailsToHclTerraform, 
ChronicleFeedFailureDetailsOutputReference, 
ChronicleFeedTimeouts, 
chronicleFeedTimeoutsToTerraform, 
chronicleFeedTimeoutsToHclTerraform, 
ChronicleFeedTimeoutsOutputReference} from './index-structs/index';
export * from './index-structs/index';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface ChronicleFeedConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#deletion_policy ChronicleFeed#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Customer-provided feed name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#display_name ChronicleFeed#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether the feed is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#enabled ChronicleFeed#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#feed ChronicleFeed#feed}
  */
  readonly feed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#id ChronicleFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#instance ChronicleFeed#instance}
  */
  readonly instance: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#location ChronicleFeed#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#project ChronicleFeed#project}
  */
  readonly project?: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#details ChronicleFeed#details}
  */
  readonly details?: ChronicleFeedDetails;
  /**
  * failure_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#failure_details ChronicleFeed#failure_details}
  */
  readonly failureDetails?: ChronicleFeedFailureDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#timeouts ChronicleFeed#timeouts}
  */
  readonly timeouts?: ChronicleFeedTimeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed google_chronicle_feed}
*/
export class ChronicleFeed extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleFeed resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleFeed to import
  * @param importFromId The id of the existing ChronicleFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_feed google_chronicle_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleFeedConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_feed',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._feed = config.feed;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._project = config.project;
    this._details.internalValue = config.details;
    this._failureDetails.internalValue = config.failureDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // failure_msg - computed: true, optional: false, required: false
  public get failureMsg() {
    return this.getStringAttribute('failure_msg');
  }

  // feed - computed: true, optional: true, required: false
  private _feed?: string; 
  public get feed() {
    return this.getStringAttribute('feed');
  }
  public set feed(value: string) {
    this._feed = value;
  }
  public resetFeed() {
    this._feed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedInput() {
    return this._feed;
  }

  // feed_service_account - computed: true, optional: false, required: false
  public get feedServiceAccount() {
    return this.getStringAttribute('feed_service_account');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // last_feed_initiation_time - computed: true, optional: false, required: false
  public get lastFeedInitiationTime() {
    return this.getStringAttribute('last_feed_initiation_time');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // details - computed: false, optional: true, required: false
  private _details = new ChronicleFeedDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: ChronicleFeedDetails) {
    this._details.internalValue = value;
  }
  public resetDetails() {
    this._details.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // failure_details - computed: false, optional: true, required: false
  private _failureDetails = new ChronicleFeedFailureDetailsOutputReference(this, "failure_details");
  public get failureDetails() {
    return this._failureDetails;
  }
  public putFailureDetails(value: ChronicleFeedFailureDetails) {
    this._failureDetails.internalValue = value;
  }
  public resetFailureDetails() {
    this._failureDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDetailsInput() {
    return this._failureDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleFeedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleFeedTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      enabled: cdktn.booleanToTerraform(this._enabled),
      feed: cdktn.stringToTerraform(this._feed),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      details: chronicleFeedDetailsToTerraform(this._details.internalValue),
      failure_details: chronicleFeedFailureDetailsToTerraform(this._failureDetails.internalValue),
      timeouts: chronicleFeedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feed: {
        value: cdktn.stringToHclTerraform(this._feed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      details: {
        value: chronicleFeedDetailsToHclTerraform(this._details.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleFeedDetailsList",
      },
      failure_details: {
        value: chronicleFeedFailureDetailsToHclTerraform(this._failureDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleFeedFailureDetailsList",
      },
      timeouts: {
        value: chronicleFeedTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleFeedTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
