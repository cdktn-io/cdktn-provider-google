/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ChronicleFindingsRefinementDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The archive state of the findings refinement deployment.
  * Cannot be set to true unless enabled is set to false.
  * If currently set to true, enabled cannot be updated to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#archived ChronicleFindingsRefinementDeployment#archived}
  */
  readonly archived?: boolean | cdktn.IResolvable;
  /**
  * Whether the findings refinement is currently deployed continuously against
  * incoming findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#enabled ChronicleFindingsRefinementDeployment#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#findings_refinement ChronicleFindingsRefinementDeployment#findings_refinement}
  */
  readonly findingsRefinement: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#instance ChronicleFindingsRefinementDeployment#instance}
  */
  readonly instance: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#location ChronicleFindingsRefinementDeployment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}
  */
  readonly project?: string;
  /**
  * detection_exclusion_application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#detection_exclusion_application ChronicleFindingsRefinementDeployment#detection_exclusion_application}
  */
  readonly detectionExclusionApplication?: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#timeouts ChronicleFindingsRefinementDeployment#timeouts}
  */
  readonly timeouts?: ChronicleFindingsRefinementDeploymentTimeouts;
}
export interface ChronicleFindingsRefinementDeploymentDetectionExclusionApplication {
  /**
  * The CuratedRuleSets this detection exclusion applies to.
  * Format:
  * projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#curated_rule_sets ChronicleFindingsRefinementDeployment#curated_rule_sets}
  */
  readonly curatedRuleSets?: string[];
  /**
  * The CuratedRules this detection exclusion applies to.
  * Format:
  * projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#curated_rules ChronicleFindingsRefinementDeployment#curated_rules}
  */
  readonly curatedRules?: string[];
  /**
  * The Rules this detection exclusion applies to.
  * Format:
  * projects/{project}/locations/{location}/instances/{instance}/rules/{rule}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#rules ChronicleFindingsRefinementDeployment#rules}
  */
  readonly rules?: string[];
}

export function chronicleFindingsRefinementDeploymentDetectionExclusionApplicationToTerraform(struct?: ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference | ChronicleFindingsRefinementDeploymentDetectionExclusionApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    curated_rule_sets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.curatedRuleSets),
    curated_rules: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.curatedRules),
    rules: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.rules),
  }
}


export function chronicleFindingsRefinementDeploymentDetectionExclusionApplicationToHclTerraform(struct?: ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference | ChronicleFindingsRefinementDeploymentDetectionExclusionApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    curated_rule_sets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.curatedRuleSets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    curated_rules: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.curatedRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.rules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChronicleFindingsRefinementDeploymentDetectionExclusionApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curatedRuleSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.curatedRuleSets = this._curatedRuleSets;
    }
    if (this._curatedRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.curatedRules = this._curatedRules;
    }
    if (this._rules !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._curatedRuleSets = undefined;
      this._curatedRules = undefined;
      this._rules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._curatedRuleSets = value.curatedRuleSets;
      this._curatedRules = value.curatedRules;
      this._rules = value.rules;
    }
  }

  // curated_rule_sets - computed: false, optional: true, required: false
  private _curatedRuleSets?: string[]; 
  public get curatedRuleSets() {
    return this.getListAttribute('curated_rule_sets');
  }
  public set curatedRuleSets(value: string[]) {
    this._curatedRuleSets = value;
  }
  public resetCuratedRuleSets() {
    this._curatedRuleSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curatedRuleSetsInput() {
    return this._curatedRuleSets;
  }

  // curated_rules - computed: false, optional: true, required: false
  private _curatedRules?: string[]; 
  public get curatedRules() {
    return this.getListAttribute('curated_rules');
  }
  public set curatedRules(value: string[]) {
    this._curatedRules = value;
  }
  public resetCuratedRules() {
    this._curatedRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curatedRulesInput() {
    return this._curatedRules;
  }

  // deleted_curated_rule_sets - computed: true, optional: false, required: false
  public get deletedCuratedRuleSets() {
    return this.getListAttribute('deleted_curated_rule_sets');
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return this.getListAttribute('rules');
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }
}
export interface ChronicleFindingsRefinementDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#create ChronicleFindingsRefinementDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#delete ChronicleFindingsRefinementDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#update ChronicleFindingsRefinementDeployment#update}
  */
  readonly update?: string;
}

export function chronicleFindingsRefinementDeploymentTimeoutsToTerraform(struct?: ChronicleFindingsRefinementDeploymentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function chronicleFindingsRefinementDeploymentTimeoutsToHclTerraform(struct?: ChronicleFindingsRefinementDeploymentTimeouts | cdktn.IResolvable): any {
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
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChronicleFindingsRefinementDeploymentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChronicleFindingsRefinementDeploymentTimeouts | cdktn.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChronicleFindingsRefinementDeploymentTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment google_chronicle_findings_refinement_deployment}
*/
export class ChronicleFindingsRefinementDeployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_findings_refinement_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChronicleFindingsRefinementDeployment to import
  * @param importFromId The id of the existing ChronicleFindingsRefinementDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChronicleFindingsRefinementDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_findings_refinement_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement_deployment google_chronicle_findings_refinement_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChronicleFindingsRefinementDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ChronicleFindingsRefinementDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_findings_refinement_deployment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.42.0',
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
    this._archived = config.archived;
    this._enabled = config.enabled;
    this._findingsRefinement = config.findingsRefinement;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._project = config.project;
    this._detectionExclusionApplication.internalValue = config.detectionExclusionApplication;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean | cdktn.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktn.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
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

  // findings_refinement - computed: false, optional: false, required: true
  private _findingsRefinement?: string; 
  public get findingsRefinement() {
    return this.getStringAttribute('findings_refinement');
  }
  public set findingsRefinement(value: string) {
    this._findingsRefinement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findingsRefinementInput() {
    return this._findingsRefinement;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // detection_exclusion_application - computed: false, optional: true, required: false
  private _detectionExclusionApplication = new ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference(this, "detection_exclusion_application");
  public get detectionExclusionApplication() {
    return this._detectionExclusionApplication;
  }
  public putDetectionExclusionApplication(value: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication) {
    this._detectionExclusionApplication.internalValue = value;
  }
  public resetDetectionExclusionApplication() {
    this._detectionExclusionApplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionExclusionApplicationInput() {
    return this._detectionExclusionApplication.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChronicleFindingsRefinementDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChronicleFindingsRefinementDeploymentTimeouts) {
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
      archived: cdktn.booleanToTerraform(this._archived),
      enabled: cdktn.booleanToTerraform(this._enabled),
      findings_refinement: cdktn.stringToTerraform(this._findingsRefinement),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      detection_exclusion_application: chronicleFindingsRefinementDeploymentDetectionExclusionApplicationToTerraform(this._detectionExclusionApplication.internalValue),
      timeouts: chronicleFindingsRefinementDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archived: {
        value: cdktn.booleanToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      findings_refinement: {
        value: cdktn.stringToHclTerraform(this._findingsRefinement),
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
      detection_exclusion_application: {
        value: chronicleFindingsRefinementDeploymentDetectionExclusionApplicationToHclTerraform(this._detectionExclusionApplication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationList",
      },
      timeouts: {
        value: chronicleFindingsRefinementDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChronicleFindingsRefinementDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
