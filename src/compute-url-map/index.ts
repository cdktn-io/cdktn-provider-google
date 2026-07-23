/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { ComputeUrlMapDefaultCustomErrorResponsePolicy, 
computeUrlMapDefaultCustomErrorResponsePolicyToTerraform, 
computeUrlMapDefaultCustomErrorResponsePolicyToHclTerraform, 
ComputeUrlMapDefaultCustomErrorResponsePolicyOutputReference, 
ComputeUrlMapDefaultRouteAction, 
computeUrlMapDefaultRouteActionToTerraform, 
computeUrlMapDefaultRouteActionToHclTerraform, 
ComputeUrlMapDefaultRouteActionOutputReference, 
ComputeUrlMapDefaultUrlRedirect, 
computeUrlMapDefaultUrlRedirectToTerraform, 
computeUrlMapDefaultUrlRedirectToHclTerraform, 
ComputeUrlMapDefaultUrlRedirectOutputReference, 
ComputeUrlMapHeaderAction, 
computeUrlMapHeaderActionToTerraform, 
computeUrlMapHeaderActionToHclTerraform, 
ComputeUrlMapHeaderActionOutputReference, 
ComputeUrlMapHostRule, 
computeUrlMapHostRuleToTerraform, 
computeUrlMapHostRuleToHclTerraform, 
ComputeUrlMapHostRuleList, 
ComputeUrlMapPathMatcher, 
computeUrlMapPathMatcherToTerraform, 
computeUrlMapPathMatcherToHclTerraform, 
ComputeUrlMapPathMatcherList, 
ComputeUrlMapTest, 
computeUrlMapTestToTerraform, 
computeUrlMapTestToHclTerraform, 
ComputeUrlMapTestList, 
ComputeUrlMapTimeouts, 
computeUrlMapTimeoutsToTerraform, 
computeUrlMapTimeoutsToHclTerraform, 
ComputeUrlMapTimeoutsOutputReference} from './index-structs/index';
export * from './index-structs/index';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface ComputeUrlMapConfig extends cdktn.TerraformMetaArguments {
  /**
  * The backend service or backend bucket to use when none of the given rules match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#default_service ComputeUrlMap#default_service}
  */
  readonly defaultService?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#deletion_policy ComputeUrlMap#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource. Provide this property when you create
  * the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#description ComputeUrlMap#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#id ComputeUrlMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created. The
  * name must be 1-63 characters long, and comply with RFC1035. Specifically, the
  * name must be 1-63 characters long and match the regular expression
  * '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase
  * letter, and all following characters must be a dash, lowercase letter, or digit,
  * except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#name ComputeUrlMap#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#project ComputeUrlMap#project}
  */
  readonly project?: string;
  /**
  * default_custom_error_response_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#default_custom_error_response_policy ComputeUrlMap#default_custom_error_response_policy}
  */
  readonly defaultCustomErrorResponsePolicy?: ComputeUrlMapDefaultCustomErrorResponsePolicy;
  /**
  * default_route_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#default_route_action ComputeUrlMap#default_route_action}
  */
  readonly defaultRouteAction?: ComputeUrlMapDefaultRouteAction;
  /**
  * default_url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#default_url_redirect ComputeUrlMap#default_url_redirect}
  */
  readonly defaultUrlRedirect?: ComputeUrlMapDefaultUrlRedirect;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#header_action ComputeUrlMap#header_action}
  */
  readonly headerAction?: ComputeUrlMapHeaderAction;
  /**
  * host_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#host_rule ComputeUrlMap#host_rule}
  */
  readonly hostRule?: ComputeUrlMapHostRule[] | cdktn.IResolvable;
  /**
  * path_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#path_matcher ComputeUrlMap#path_matcher}
  */
  readonly pathMatcher?: ComputeUrlMapPathMatcher[] | cdktn.IResolvable;
  /**
  * test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#test ComputeUrlMap#test}
  */
  readonly test?: ComputeUrlMapTest[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#timeouts ComputeUrlMap#timeouts}
  */
  readonly timeouts?: ComputeUrlMapTimeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map google_compute_url_map}
*/
export class ComputeUrlMap extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_url_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeUrlMap resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeUrlMap to import
  * @param importFromId The id of the existing ComputeUrlMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeUrlMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_url_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_url_map google_compute_url_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeUrlMapConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeUrlMapConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_url_map',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.41.0',
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
    this._defaultService = config.defaultService;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._defaultCustomErrorResponsePolicy.internalValue = config.defaultCustomErrorResponsePolicy;
    this._defaultRouteAction.internalValue = config.defaultRouteAction;
    this._defaultUrlRedirect.internalValue = config.defaultUrlRedirect;
    this._headerAction.internalValue = config.headerAction;
    this._hostRule.internalValue = config.hostRule;
    this._pathMatcher.internalValue = config.pathMatcher;
    this._test.internalValue = config.test;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // default_service - computed: false, optional: true, required: false
  private _defaultService?: string; 
  public get defaultService() {
    return this.getStringAttribute('default_service');
  }
  public set defaultService(value: string) {
    this._defaultService = value;
  }
  public resetDefaultService() {
    this._defaultService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceInput() {
    return this._defaultService;
  }

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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // map_id - computed: true, optional: false, required: false
  public get mapId() {
    return this.getNumberAttribute('map_id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // default_custom_error_response_policy - computed: false, optional: true, required: false
  private _defaultCustomErrorResponsePolicy = new ComputeUrlMapDefaultCustomErrorResponsePolicyOutputReference(this, "default_custom_error_response_policy");
  public get defaultCustomErrorResponsePolicy() {
    return this._defaultCustomErrorResponsePolicy;
  }
  public putDefaultCustomErrorResponsePolicy(value: ComputeUrlMapDefaultCustomErrorResponsePolicy) {
    this._defaultCustomErrorResponsePolicy.internalValue = value;
  }
  public resetDefaultCustomErrorResponsePolicy() {
    this._defaultCustomErrorResponsePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCustomErrorResponsePolicyInput() {
    return this._defaultCustomErrorResponsePolicy.internalValue;
  }

  // default_route_action - computed: false, optional: true, required: false
  private _defaultRouteAction = new ComputeUrlMapDefaultRouteActionOutputReference(this, "default_route_action");
  public get defaultRouteAction() {
    return this._defaultRouteAction;
  }
  public putDefaultRouteAction(value: ComputeUrlMapDefaultRouteAction) {
    this._defaultRouteAction.internalValue = value;
  }
  public resetDefaultRouteAction() {
    this._defaultRouteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteActionInput() {
    return this._defaultRouteAction.internalValue;
  }

  // default_url_redirect - computed: false, optional: true, required: false
  private _defaultUrlRedirect = new ComputeUrlMapDefaultUrlRedirectOutputReference(this, "default_url_redirect");
  public get defaultUrlRedirect() {
    return this._defaultUrlRedirect;
  }
  public putDefaultUrlRedirect(value: ComputeUrlMapDefaultUrlRedirect) {
    this._defaultUrlRedirect.internalValue = value;
  }
  public resetDefaultUrlRedirect() {
    this._defaultUrlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUrlRedirectInput() {
    return this._defaultUrlRedirect.internalValue;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new ComputeUrlMapHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: ComputeUrlMapHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }

  // host_rule - computed: false, optional: true, required: false
  private _hostRule = new ComputeUrlMapHostRuleList(this, "host_rule", true);
  public get hostRule() {
    return this._hostRule;
  }
  public putHostRule(value: ComputeUrlMapHostRule[] | cdktn.IResolvable) {
    this._hostRule.internalValue = value;
  }
  public resetHostRule() {
    this._hostRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRuleInput() {
    return this._hostRule.internalValue;
  }

  // path_matcher - computed: false, optional: true, required: false
  private _pathMatcher = new ComputeUrlMapPathMatcherList(this, "path_matcher", false);
  public get pathMatcher() {
    return this._pathMatcher;
  }
  public putPathMatcher(value: ComputeUrlMapPathMatcher[] | cdktn.IResolvable) {
    this._pathMatcher.internalValue = value;
  }
  public resetPathMatcher() {
    this._pathMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatcherInput() {
    return this._pathMatcher.internalValue;
  }

  // test - computed: false, optional: true, required: false
  private _test = new ComputeUrlMapTestList(this, "test", false);
  public get test() {
    return this._test;
  }
  public putTest(value: ComputeUrlMapTest[] | cdktn.IResolvable) {
    this._test.internalValue = value;
  }
  public resetTest() {
    this._test.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeUrlMapTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeUrlMapTimeouts) {
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
      default_service: cdktn.stringToTerraform(this._defaultService),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      default_custom_error_response_policy: computeUrlMapDefaultCustomErrorResponsePolicyToTerraform(this._defaultCustomErrorResponsePolicy.internalValue),
      default_route_action: computeUrlMapDefaultRouteActionToTerraform(this._defaultRouteAction.internalValue),
      default_url_redirect: computeUrlMapDefaultUrlRedirectToTerraform(this._defaultUrlRedirect.internalValue),
      header_action: computeUrlMapHeaderActionToTerraform(this._headerAction.internalValue),
      host_rule: cdktn.listMapper(computeUrlMapHostRuleToTerraform, true)(this._hostRule.internalValue),
      path_matcher: cdktn.listMapper(computeUrlMapPathMatcherToTerraform, true)(this._pathMatcher.internalValue),
      test: cdktn.listMapper(computeUrlMapTestToTerraform, true)(this._test.internalValue),
      timeouts: computeUrlMapTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_service: {
        value: cdktn.stringToHclTerraform(this._defaultService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      default_custom_error_response_policy: {
        value: computeUrlMapDefaultCustomErrorResponsePolicyToHclTerraform(this._defaultCustomErrorResponsePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeUrlMapDefaultCustomErrorResponsePolicyList",
      },
      default_route_action: {
        value: computeUrlMapDefaultRouteActionToHclTerraform(this._defaultRouteAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeUrlMapDefaultRouteActionList",
      },
      default_url_redirect: {
        value: computeUrlMapDefaultUrlRedirectToHclTerraform(this._defaultUrlRedirect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeUrlMapDefaultUrlRedirectList",
      },
      header_action: {
        value: computeUrlMapHeaderActionToHclTerraform(this._headerAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeUrlMapHeaderActionList",
      },
      host_rule: {
        value: cdktn.listMapperHcl(computeUrlMapHostRuleToHclTerraform, true)(this._hostRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeUrlMapHostRuleList",
      },
      path_matcher: {
        value: cdktn.listMapperHcl(computeUrlMapPathMatcherToHclTerraform, true)(this._pathMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeUrlMapPathMatcherList",
      },
      test: {
        value: cdktn.listMapperHcl(computeUrlMapTestToHclTerraform, true)(this._test.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeUrlMapTestList",
      },
      timeouts: {
        value: computeUrlMapTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeUrlMapTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
