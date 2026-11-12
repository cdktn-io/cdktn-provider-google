/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DiscoveryEngineProjectProvisionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Set to 'true' to specify that the caller has read and consents to the
  * [Terms for data use](https://cloud.google.com/retail/data-use-terms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#accept_data_use_terms DiscoveryEngineProjectProvision#accept_data_use_terms}
  */
  readonly acceptDataUseTerms?: boolean | cdktn.IResolvable;
  /**
  * The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms)
  * that the caller has read and consents to. An acceptable version is '2022-11-23',
  * and this may change over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#data_use_terms_version DiscoveryEngineProjectProvision#data_use_terms_version}
  */
  readonly dataUseTermsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#id DiscoveryEngineProjectProvision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location in which to provision the project, such as
  * 'global', 'us', or 'eu'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#location DiscoveryEngineProjectProvision#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#project DiscoveryEngineProjectProvision#project}
  */
  readonly project?: string;
  /**
  * saas_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#saas_params DiscoveryEngineProjectProvision#saas_params}
  */
  readonly saasParams?: DiscoveryEngineProjectProvisionSaasParams;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#timeouts DiscoveryEngineProjectProvision#timeouts}
  */
  readonly timeouts?: DiscoveryEngineProjectProvisionTimeouts;
}
export interface DiscoveryEngineProjectProvisionSaasParams {
  /**
  * Set to 'true' to specify that the caller has read and consents to the
  * Terms for business edition quality of service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#accept_biz_qos DiscoveryEngineProjectProvision#accept_biz_qos}
  */
  readonly acceptBizQos?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether the current request is for Business edition ('true')
  * or not ('false').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#is_biz DiscoveryEngineProjectProvision#is_biz}
  */
  readonly isBiz?: boolean | cdktn.IResolvable;
}

export function discoveryEngineProjectProvisionSaasParamsToTerraform(struct?: DiscoveryEngineProjectProvisionSaasParamsOutputReference | DiscoveryEngineProjectProvisionSaasParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accept_biz_qos: cdktn.booleanToTerraform(struct!.acceptBizQos),
    is_biz: cdktn.booleanToTerraform(struct!.isBiz),
  }
}


export function discoveryEngineProjectProvisionSaasParamsToHclTerraform(struct?: DiscoveryEngineProjectProvisionSaasParamsOutputReference | DiscoveryEngineProjectProvisionSaasParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accept_biz_qos: {
      value: cdktn.booleanToHclTerraform(struct!.acceptBizQos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_biz: {
      value: cdktn.booleanToHclTerraform(struct!.isBiz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineProjectProvisionSaasParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineProjectProvisionSaasParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptBizQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptBizQos = this._acceptBizQos;
    }
    if (this._isBiz !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBiz = this._isBiz;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineProjectProvisionSaasParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptBizQos = undefined;
      this._isBiz = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptBizQos = value.acceptBizQos;
      this._isBiz = value.isBiz;
    }
  }

  // accept_biz_qos - computed: false, optional: true, required: false
  private _acceptBizQos?: boolean | cdktn.IResolvable; 
  public get acceptBizQos() {
    return this.getBooleanAttribute('accept_biz_qos');
  }
  public set acceptBizQos(value: boolean | cdktn.IResolvable) {
    this._acceptBizQos = value;
  }
  public resetAcceptBizQos() {
    this._acceptBizQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptBizQosInput() {
    return this._acceptBizQos;
  }

  // is_biz - computed: false, optional: true, required: false
  private _isBiz?: boolean | cdktn.IResolvable; 
  public get isBiz() {
    return this.getBooleanAttribute('is_biz');
  }
  public set isBiz(value: boolean | cdktn.IResolvable) {
    this._isBiz = value;
  }
  public resetIsBiz() {
    this._isBiz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBizInput() {
    return this._isBiz;
  }
}
export interface DiscoveryEngineProjectProvisionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#create DiscoveryEngineProjectProvision#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#delete DiscoveryEngineProjectProvision#delete}
  */
  readonly delete?: string;
}

export function discoveryEngineProjectProvisionTimeoutsToTerraform(struct?: DiscoveryEngineProjectProvisionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function discoveryEngineProjectProvisionTimeoutsToHclTerraform(struct?: DiscoveryEngineProjectProvisionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineProjectProvisionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineProjectProvisionTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineProjectProvisionTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision google_discovery_engine_project_provision}
*/
export class DiscoveryEngineProjectProvision extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_project_provision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineProjectProvision to import
  * @param importFromId The id of the existing DiscoveryEngineProjectProvision that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineProjectProvision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_project_provision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/discovery_engine_project_provision google_discovery_engine_project_provision} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineProjectProvisionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineProjectProvisionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_project_provision',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.11.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptDataUseTerms = config.acceptDataUseTerms;
    this._dataUseTermsVersion = config.dataUseTermsVersion;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._saasParams.internalValue = config.saasParams;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_data_use_terms - computed: false, optional: true, required: false
  private _acceptDataUseTerms?: boolean | cdktn.IResolvable; 
  public get acceptDataUseTerms() {
    return this.getBooleanAttribute('accept_data_use_terms');
  }
  public set acceptDataUseTerms(value: boolean | cdktn.IResolvable) {
    this._acceptDataUseTerms = value;
  }
  public resetAcceptDataUseTerms() {
    this._acceptDataUseTerms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptDataUseTermsInput() {
    return this._acceptDataUseTerms;
  }

  // data_use_terms_version - computed: false, optional: true, required: false
  private _dataUseTermsVersion?: string; 
  public get dataUseTermsVersion() {
    return this.getStringAttribute('data_use_terms_version');
  }
  public set dataUseTermsVersion(value: string) {
    this._dataUseTermsVersion = value;
  }
  public resetDataUseTermsVersion() {
    this._dataUseTermsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataUseTermsVersionInput() {
    return this._dataUseTermsVersion;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // saas_params - computed: false, optional: true, required: false
  private _saasParams = new DiscoveryEngineProjectProvisionSaasParamsOutputReference(this, "saas_params");
  public get saasParams() {
    return this._saasParams;
  }
  public putSaasParams(value: DiscoveryEngineProjectProvisionSaasParams) {
    this._saasParams.internalValue = value;
  }
  public resetSaasParams() {
    this._saasParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasParamsInput() {
    return this._saasParams.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineProjectProvisionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineProjectProvisionTimeouts) {
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
      accept_data_use_terms: cdktn.booleanToTerraform(this._acceptDataUseTerms),
      data_use_terms_version: cdktn.stringToTerraform(this._dataUseTermsVersion),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      saas_params: discoveryEngineProjectProvisionSaasParamsToTerraform(this._saasParams.internalValue),
      timeouts: discoveryEngineProjectProvisionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_data_use_terms: {
        value: cdktn.booleanToHclTerraform(this._acceptDataUseTerms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_use_terms_version: {
        value: cdktn.stringToHclTerraform(this._dataUseTermsVersion),
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
      saas_params: {
        value: discoveryEngineProjectProvisionSaasParamsToHclTerraform(this._saasParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineProjectProvisionSaasParamsList",
      },
      timeouts: {
        value: discoveryEngineProjectProvisionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineProjectProvisionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
