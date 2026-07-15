/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/project_iam_audit_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ProjectIamAuditConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/project_iam_audit_config#id ProjectIamAuditConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/project_iam_audit_config#project ProjectIamAuditConfig#project}
  */
  readonly project: string;
  /**
  * Service which will be enabled for audit logging. The special value allServices covers all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/project_iam_audit_config#service ProjectIamAuditConfig#service}
  */
  readonly service: string;
  /**
  * audit_log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/project_iam_audit_config#audit_log_config ProjectIamAuditConfig#audit_log_config}
  */
  readonly auditLogConfig: ProjectIamAuditConfigAuditLogConfig[] | cdktn.IResolvable;
}
export interface ProjectIamAuditConfigAuditLogConfig {
  /**
  * Identities that do not cause logging for this type of permission. Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/project_iam_audit_config#exempted_members ProjectIamAuditConfig#exempted_members}
  */
  readonly exemptedMembers?: string[];
  /**
  * Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/project_iam_audit_config#log_type ProjectIamAuditConfig#log_type}
  */
  readonly logType: string;
}

export function projectIamAuditConfigAuditLogConfigToTerraform(struct?: ProjectIamAuditConfigAuditLogConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exempted_members: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exemptedMembers),
    log_type: cdktn.stringToTerraform(struct!.logType),
  }
}


export function projectIamAuditConfigAuditLogConfigToHclTerraform(struct?: ProjectIamAuditConfigAuditLogConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exempted_members: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exemptedMembers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectIamAuditConfigAuditLogConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectIamAuditConfigAuditLogConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exemptedMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptedMembers = this._exemptedMembers;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectIamAuditConfigAuditLogConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exemptedMembers = undefined;
      this._logType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exemptedMembers = value.exemptedMembers;
      this._logType = value.logType;
    }
  }

  // exempted_members - computed: false, optional: true, required: false
  private _exemptedMembers?: string[]; 
  public get exemptedMembers() {
    return cdktn.Fn.tolist(this.getListAttribute('exempted_members'));
  }
  public set exemptedMembers(value: string[]) {
    this._exemptedMembers = value;
  }
  public resetExemptedMembers() {
    this._exemptedMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptedMembersInput() {
    return this._exemptedMembers;
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class ProjectIamAuditConfigAuditLogConfigList extends cdktn.ComplexList {
  public internalValue? : ProjectIamAuditConfigAuditLogConfig[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectIamAuditConfigAuditLogConfigOutputReference {
    return new ProjectIamAuditConfigAuditLogConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/project_iam_audit_config google_project_iam_audit_config}
*/
export class ProjectIamAuditConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_project_iam_audit_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ProjectIamAuditConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectIamAuditConfig to import
  * @param importFromId The id of the existing ProjectIamAuditConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/project_iam_audit_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectIamAuditConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_project_iam_audit_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/project_iam_audit_config google_project_iam_audit_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectIamAuditConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectIamAuditConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project_iam_audit_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.40.0',
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
    this._id = config.id;
    this._project = config.project;
    this._service = config.service;
    this._auditLogConfig.internalValue = config.auditLogConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // audit_log_config - computed: false, optional: false, required: true
  private _auditLogConfig = new ProjectIamAuditConfigAuditLogConfigList(this, "audit_log_config", true);
  public get auditLogConfig() {
    return this._auditLogConfig;
  }
  public putAuditLogConfig(value: ProjectIamAuditConfigAuditLogConfig[] | cdktn.IResolvable) {
    this._auditLogConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogConfigInput() {
    return this._auditLogConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      service: cdktn.stringToTerraform(this._service),
      audit_log_config: cdktn.listMapper(projectIamAuditConfigAuditLogConfigToTerraform, true)(this._auditLogConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      service: {
        value: cdktn.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_log_config: {
        value: cdktn.listMapperHcl(projectIamAuditConfigAuditLogConfigToHclTerraform, true)(this._auditLogConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectIamAuditConfigAuditLogConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
