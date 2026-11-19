# `designCenterApplication` Submodule <a name="`designCenterApplication` Submodule" id="@cdktn/provider-google.designCenterApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DesignCenterApplication <a name="DesignCenterApplication" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application google_design_center_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  location: str,
  scope: DesignCenterApplicationScope,
  source: DesignCenterApplicationSource,
  space: str,
  app_parameters: IResolvable | typing.List[DesignCenterApplicationAppParameters] = None,
  attributes: DesignCenterApplicationAttributes = None,
  component_parameters: IResolvable | typing.List[DesignCenterApplicationComponentParameters] = None,
  composite_application_parameters: DesignCenterApplicationCompositeApplicationParameters = None,
  connection_configs: IResolvable | typing.List[DesignCenterApplicationConnectionConfigs] = None,
  deletion_policy: str = None,
  deployment_project: str = None,
  deployment_region: str = None,
  deployment_target: DesignCenterApplicationDeploymentTarget = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  roles_apis_config: IResolvable | typing.List[DesignCenterApplicationRolesApisConfig] = None,
  service_account: str = None,
  timeouts: DesignCenterApplicationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The ID of the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.space">space</a></code> | <code>str</code> | The space for the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.appParameters">app_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>]</code> | app_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.componentParameters">component_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>]</code> | component_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.compositeApplicationParameters">composite_application_parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | composite_application_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.connectionConfigs">connection_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>]</code> | connection_configs block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.deploymentProject">deployment_project</a></code> | <code>str</code> | Deployment project. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.deploymentRegion">deployment_region</a></code> | <code>str</code> | Deployment region. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.deploymentTarget">deployment_target</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | deployment_target block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#id DesignCenterApplication#id}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project DesignCenterApplication#project}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.rolesApisConfig">roles_apis_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>]</code> | roles_apis_config block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Service account for deployment. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.applicationId"></a>

- *Type:* str

The ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_id DesignCenterApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.location"></a>

- *Type:* str

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#location DesignCenterApplication#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#scope DesignCenterApplication#scope}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#source DesignCenterApplication#source}

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.space"></a>

- *Type:* str

The space for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#space DesignCenterApplication#space}

---

##### `app_parameters`<sup>Optional</sup> <a name="app_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.appParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>]

app_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#app_parameters DesignCenterApplication#app_parameters}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#attributes DesignCenterApplication#attributes}

---

##### `component_parameters`<sup>Optional</sup> <a name="component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.componentParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>]

component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#component_parameters DesignCenterApplication#component_parameters}

---

##### `composite_application_parameters`<sup>Optional</sup> <a name="composite_application_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.compositeApplicationParameters"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

composite_application_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#composite_application_parameters DesignCenterApplication#composite_application_parameters}

---

##### `connection_configs`<sup>Optional</sup> <a name="connection_configs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.connectionConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>]

connection_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#connection_configs DesignCenterApplication#connection_configs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deletion_policy DesignCenterApplication#deletion_policy}

---

##### `deployment_project`<sup>Optional</sup> <a name="deployment_project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.deploymentProject"></a>

- *Type:* str

Deployment project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_project DesignCenterApplication#deployment_project}

---

##### `deployment_region`<sup>Optional</sup> <a name="deployment_region" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.deploymentRegion"></a>

- *Type:* str

Deployment region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_region DesignCenterApplication#deployment_region}

---

##### `deployment_target`<sup>Optional</sup> <a name="deployment_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.deploymentTarget"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_target DesignCenterApplication#deployment_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.description"></a>

- *Type:* str

Description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#description DesignCenterApplication#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.displayName"></a>

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#id DesignCenterApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project DesignCenterApplication#project}.

---

##### `roles_apis_config`<sup>Optional</sup> <a name="roles_apis_config" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.rolesApisConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>]

roles_apis_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#roles_apis_config DesignCenterApplication#roles_apis_config}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Service account for deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account DesignCenterApplication#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#timeouts DesignCenterApplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters">put_app_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters">put_component_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters">put_composite_application_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs">put_connection_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget">put_deployment_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig">put_roles_apis_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAppParameters">reset_app_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetComponentParameters">reset_component_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetCompositeApplicationParameters">reset_composite_application_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetConnectionConfigs">reset_connection_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentProject">reset_deployment_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentRegion">reset_deployment_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentTarget">reset_deployment_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetRolesApisConfig">reset_roles_apis_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app_parameters` <a name="put_app_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters"></a>

```python
def put_app_parameters(
  value: IResolvable | typing.List[DesignCenterApplicationAppParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAppParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>]

---

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes"></a>

```python
def put_attributes(
  business_owners: IResolvable | typing.List[DesignCenterApplicationAttributesBusinessOwners] = None,
  criticality: DesignCenterApplicationAttributesCriticality = None,
  developer_owners: IResolvable | typing.List[DesignCenterApplicationAttributesDeveloperOwners] = None,
  environment: DesignCenterApplicationAttributesEnvironment = None,
  operator_owners: IResolvable | typing.List[DesignCenterApplicationAttributesOperatorOwners] = None
) -> None
```

###### `business_owners`<sup>Optional</sup> <a name="business_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes.parameter.businessOwners"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#business_owners DesignCenterApplication#business_owners}

---

###### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes.parameter.criticality"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#criticality DesignCenterApplication#criticality}

---

###### `developer_owners`<sup>Optional</sup> <a name="developer_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes.parameter.developerOwners"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#developer_owners DesignCenterApplication#developer_owners}

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes.parameter.environment"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#environment DesignCenterApplication#environment}

---

###### `operator_owners`<sup>Optional</sup> <a name="operator_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putAttributes.parameter.operatorOwners"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#operator_owners DesignCenterApplication#operator_owners}

---

##### `put_component_parameters` <a name="put_component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters"></a>

```python
def put_component_parameters(
  value: IResolvable | typing.List[DesignCenterApplicationComponentParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putComponentParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>]

---

##### `put_composite_application_parameters` <a name="put_composite_application_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters"></a>

```python
def put_composite_application_parameters(
  service_account_map: typing.Mapping[str] = None
) -> None
```

###### `service_account_map`<sup>Optional</sup> <a name="service_account_map" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putCompositeApplicationParameters.parameter.serviceAccountMap"></a>

- *Type:* typing.Mapping[str]

A map from a component URI to the service account that deploys the component.

Keys use the format
'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}'
and values use the format
'projects/{project}/serviceAccounts/{email_address}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account_map DesignCenterApplication#service_account_map}

---

##### `put_connection_configs` <a name="put_connection_configs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs"></a>

```python
def put_connection_configs(
  value: IResolvable | typing.List[DesignCenterApplicationConnectionConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putConnectionConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>]

---

##### `put_deployment_target` <a name="put_deployment_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget"></a>

```python
def put_deployment_target(
  gke_deployment_target: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget = None
) -> None
```

###### `gke_deployment_target`<sup>Optional</sup> <a name="gke_deployment_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putDeploymentTarget.parameter.gkeDeploymentTarget"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

gke_deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#gke_deployment_target DesignCenterApplication#gke_deployment_target}

---

##### `put_roles_apis_config` <a name="put_roles_apis_config" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig"></a>

```python
def put_roles_apis_config(
  value: IResolvable | typing.List[DesignCenterApplicationRolesApisConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putRolesApisConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>]

---

##### `put_scope` <a name="put_scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope"></a>

```python
def put_scope(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putScope.parameter.type"></a>

- *Type:* str

Scope type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

##### `put_source` <a name="put_source" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource"></a>

```python
def put_source(
  application_template_revision: str = None
) -> None
```

###### `application_template_revision`<sup>Optional</sup> <a name="application_template_revision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putSource.parameter.applicationTemplateRevision"></a>

- *Type:* str

Application template revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_template_revision DesignCenterApplication#application_template_revision}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#create DesignCenterApplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#delete DesignCenterApplication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#update DesignCenterApplication#update}.

---

##### `reset_app_parameters` <a name="reset_app_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAppParameters"></a>

```python
def reset_app_parameters() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_component_parameters` <a name="reset_component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetComponentParameters"></a>

```python
def reset_component_parameters() -> None
```

##### `reset_composite_application_parameters` <a name="reset_composite_application_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetCompositeApplicationParameters"></a>

```python
def reset_composite_application_parameters() -> None
```

##### `reset_connection_configs` <a name="reset_connection_configs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetConnectionConfigs"></a>

```python
def reset_connection_configs() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_deployment_project` <a name="reset_deployment_project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentProject"></a>

```python
def reset_deployment_project() -> None
```

##### `reset_deployment_region` <a name="reset_deployment_region" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentRegion"></a>

```python
def reset_deployment_region() -> None
```

##### `reset_deployment_target` <a name="reset_deployment_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDeploymentTarget"></a>

```python
def reset_deployment_target() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_roles_apis_config` <a name="reset_roles_apis_config" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetRolesApisConfig"></a>

```python
def reset_roles_apis_config() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DesignCenterApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplication.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DesignCenterApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DesignCenterApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DesignCenterApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DesignCenterApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.apphubApplication">apphub_application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParameters">app_parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList">DesignCenterApplicationAppParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference">DesignCenterApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParameters">component_parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList">DesignCenterApplicationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParameters">composite_application_parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference">DesignCenterApplicationCompositeApplicationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigs">connection_configs</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList">DesignCenterApplicationConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentMetadata">deployment_metadata</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList">DesignCenterApplicationDeploymentMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTarget">deployment_target</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfig">roles_apis_config</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList">DesignCenterApplicationRolesApisConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference">DesignCenterApplicationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference">DesignCenterApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference">DesignCenterApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParametersInput">app_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributesInput">attributes_input</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParametersInput">component_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParametersInput">composite_application_parameters_input</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigsInput">connection_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProjectInput">deployment_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegionInput">deployment_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTargetInput">deployment_target_input</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfigInput">roles_apis_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scopeInput">scope_input</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.sourceInput">source_input</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.spaceInput">space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProject">deployment_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegion">deployment_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.space">space</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `apphub_application`<sup>Required</sup> <a name="apphub_application" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.apphubApplication"></a>

```python
apphub_application: str
```

- *Type:* str

---

##### `app_parameters`<sup>Required</sup> <a name="app_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParameters"></a>

```python
app_parameters: DesignCenterApplicationAppParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList">DesignCenterApplicationAppParametersList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributes"></a>

```python
attributes: DesignCenterApplicationAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference">DesignCenterApplicationAttributesOutputReference</a>

---

##### `component_parameters`<sup>Required</sup> <a name="component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParameters"></a>

```python
component_parameters: DesignCenterApplicationComponentParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList">DesignCenterApplicationComponentParametersList</a>

---

##### `composite_application_parameters`<sup>Required</sup> <a name="composite_application_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParameters"></a>

```python
composite_application_parameters: DesignCenterApplicationCompositeApplicationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference">DesignCenterApplicationCompositeApplicationParametersOutputReference</a>

---

##### `connection_configs`<sup>Required</sup> <a name="connection_configs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigs"></a>

```python
connection_configs: DesignCenterApplicationConnectionConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList">DesignCenterApplicationConnectionConfigsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deployment_metadata`<sup>Required</sup> <a name="deployment_metadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentMetadata"></a>

```python
deployment_metadata: DesignCenterApplicationDeploymentMetadataList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList">DesignCenterApplicationDeploymentMetadataList</a>

---

##### `deployment_target`<sup>Required</sup> <a name="deployment_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTarget"></a>

```python
deployment_target: DesignCenterApplicationDeploymentTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `roles_apis_config`<sup>Required</sup> <a name="roles_apis_config" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfig"></a>

```python
roles_apis_config: DesignCenterApplicationRolesApisConfigList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList">DesignCenterApplicationRolesApisConfigList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scope"></a>

```python
scope: DesignCenterApplicationScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference">DesignCenterApplicationScopeOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.source"></a>

```python
source: DesignCenterApplicationSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference">DesignCenterApplicationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeouts"></a>

```python
timeouts: DesignCenterApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference">DesignCenterApplicationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `app_parameters_input`<sup>Optional</sup> <a name="app_parameters_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.appParametersInput"></a>

```python
app_parameters_input: IResolvable | typing.List[DesignCenterApplicationAppParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.attributesInput"></a>

```python
attributes_input: DesignCenterApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

---

##### `component_parameters_input`<sup>Optional</sup> <a name="component_parameters_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.componentParametersInput"></a>

```python
component_parameters_input: IResolvable | typing.List[DesignCenterApplicationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>]

---

##### `composite_application_parameters_input`<sup>Optional</sup> <a name="composite_application_parameters_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.compositeApplicationParametersInput"></a>

```python
composite_application_parameters_input: DesignCenterApplicationCompositeApplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

---

##### `connection_configs_input`<sup>Optional</sup> <a name="connection_configs_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.connectionConfigsInput"></a>

```python
connection_configs_input: IResolvable | typing.List[DesignCenterApplicationConnectionConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `deployment_project_input`<sup>Optional</sup> <a name="deployment_project_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProjectInput"></a>

```python
deployment_project_input: str
```

- *Type:* str

---

##### `deployment_region_input`<sup>Optional</sup> <a name="deployment_region_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegionInput"></a>

```python
deployment_region_input: str
```

- *Type:* str

---

##### `deployment_target_input`<sup>Optional</sup> <a name="deployment_target_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentTargetInput"></a>

```python
deployment_target_input: DesignCenterApplicationDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `roles_apis_config_input`<sup>Optional</sup> <a name="roles_apis_config_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.rolesApisConfigInput"></a>

```python
roles_apis_config_input: IResolvable | typing.List[DesignCenterApplicationRolesApisConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.scopeInput"></a>

```python
scope_input: DesignCenterApplicationScope
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.sourceInput"></a>

```python
source_input: DesignCenterApplicationSource
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

---

##### `space_input`<sup>Optional</sup> <a name="space_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.spaceInput"></a>

```python
space_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DesignCenterApplicationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deployment_project`<sup>Required</sup> <a name="deployment_project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentProject"></a>

```python
deployment_project: str
```

- *Type:* str

---

##### `deployment_region`<sup>Required</sup> <a name="deployment_region" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.deploymentRegion"></a>

```python
deployment_region: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.space"></a>

```python
space: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DesignCenterApplicationAppParameters <a name="DesignCenterApplicationAppParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAppParameters(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.key">key</a></code> | <code>str</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.value">value</a></code> | <code>str</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationAttributes <a name="DesignCenterApplicationAttributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributes(
  business_owners: IResolvable | typing.List[DesignCenterApplicationAttributesBusinessOwners] = None,
  criticality: DesignCenterApplicationAttributesCriticality = None,
  developer_owners: IResolvable | typing.List[DesignCenterApplicationAttributesDeveloperOwners] = None,
  environment: DesignCenterApplicationAttributesEnvironment = None,
  operator_owners: IResolvable | typing.List[DesignCenterApplicationAttributesOperatorOwners] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.businessOwners">business_owners</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>]</code> | business_owners block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.developerOwners">developer_owners</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>]</code> | developer_owners block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.operatorOwners">operator_owners</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>]</code> | operator_owners block. |

---

##### `business_owners`<sup>Optional</sup> <a name="business_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.businessOwners"></a>

```python
business_owners: IResolvable | typing.List[DesignCenterApplicationAttributesBusinessOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#business_owners DesignCenterApplication#business_owners}

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.criticality"></a>

```python
criticality: DesignCenterApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#criticality DesignCenterApplication#criticality}

---

##### `developer_owners`<sup>Optional</sup> <a name="developer_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.developerOwners"></a>

```python
developer_owners: IResolvable | typing.List[DesignCenterApplicationAttributesDeveloperOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#developer_owners DesignCenterApplication#developer_owners}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.environment"></a>

```python
environment: DesignCenterApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#environment DesignCenterApplication#environment}

---

##### `operator_owners`<sup>Optional</sup> <a name="operator_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes.property.operatorOwners"></a>

```python
operator_owners: IResolvable | typing.List[DesignCenterApplicationAttributesOperatorOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#operator_owners DesignCenterApplication#operator_owners}

---

### DesignCenterApplicationAttributesBusinessOwners <a name="DesignCenterApplicationAttributesBusinessOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesBusinessOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.email">email</a></code> | <code>str</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationAttributesCriticality <a name="DesignCenterApplicationAttributesCriticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesCriticality(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.property.type">type</a></code> | <code>str</code> | Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality.property.type"></a>

```python
type: str
```

- *Type:* str

Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationAttributesDeveloperOwners <a name="DesignCenterApplicationAttributesDeveloperOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.email">email</a></code> | <code>str</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationAttributesEnvironment <a name="DesignCenterApplicationAttributesEnvironment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesEnvironment(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.property.type">type</a></code> | <code>str</code> | Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment.property.type"></a>

```python
type: str
```

- *Type:* str

Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationAttributesOperatorOwners <a name="DesignCenterApplicationAttributesOperatorOwners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesOperatorOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.email">email</a></code> | <code>str</code> | Email address of the contact. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#email DesignCenterApplication#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

### DesignCenterApplicationComponentParameters <a name="DesignCenterApplicationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationComponentParameters(
  component: str,
  parameters: IResolvable | typing.List[DesignCenterApplicationComponentParametersParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.component">component</a></code> | <code>str</code> | The URI of the component that the parameters belong to. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>]</code> | parameters block. |

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.component"></a>

```python
component: str
```

- *Type:* str

The URI of the component that the parameters belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#component DesignCenterApplication#component}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters.property.parameters"></a>

```python
parameters: IResolvable | typing.List[DesignCenterApplicationComponentParametersParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#parameters DesignCenterApplication#parameters}

---

### DesignCenterApplicationComponentParametersParameters <a name="DesignCenterApplicationComponentParametersParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationComponentParametersParameters(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.key">key</a></code> | <code>str</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.value">value</a></code> | <code>str</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationCompositeApplicationParameters <a name="DesignCenterApplicationCompositeApplicationParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationCompositeApplicationParameters(
  service_account_map: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap">service_account_map</a></code> | <code>typing.Mapping[str]</code> | A map from a component URI to the service account that deploys the component. |

---

##### `service_account_map`<sup>Optional</sup> <a name="service_account_map" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters.property.serviceAccountMap"></a>

```python
service_account_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map from a component URI to the service account that deploys the component.

Keys use the format
'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{application_template}/components/{component}'
and values use the format
'projects/{project}/serviceAccounts/{email_address}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account_map DesignCenterApplication#service_account_map}

---

### DesignCenterApplicationConfig <a name="DesignCenterApplicationConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  location: str,
  scope: DesignCenterApplicationScope,
  source: DesignCenterApplicationSource,
  space: str,
  app_parameters: IResolvable | typing.List[DesignCenterApplicationAppParameters] = None,
  attributes: DesignCenterApplicationAttributes = None,
  component_parameters: IResolvable | typing.List[DesignCenterApplicationComponentParameters] = None,
  composite_application_parameters: DesignCenterApplicationCompositeApplicationParameters = None,
  connection_configs: IResolvable | typing.List[DesignCenterApplicationConnectionConfigs] = None,
  deletion_policy: str = None,
  deployment_project: str = None,
  deployment_region: str = None,
  deployment_target: DesignCenterApplicationDeploymentTarget = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  roles_apis_config: IResolvable | typing.List[DesignCenterApplicationRolesApisConfig] = None,
  service_account: str = None,
  timeouts: DesignCenterApplicationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.applicationId">application_id</a></code> | <code>str</code> | The ID of the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.location">location</a></code> | <code>str</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.space">space</a></code> | <code>str</code> | The space for the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.appParameters">app_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>]</code> | app_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.componentParameters">component_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>]</code> | component_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.compositeApplicationParameters">composite_application_parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | composite_application_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connectionConfigs">connection_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>]</code> | connection_configs block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentProject">deployment_project</a></code> | <code>str</code> | Deployment project. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentRegion">deployment_region</a></code> | <code>str</code> | Deployment region. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentTarget">deployment_target</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | deployment_target block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.description">description</a></code> | <code>str</code> | Description of the application. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#id DesignCenterApplication#id}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project DesignCenterApplication#project}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.rolesApisConfig">roles_apis_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>]</code> | roles_apis_config block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account for deployment. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_id DesignCenterApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#location DesignCenterApplication#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.scope"></a>

```python
scope: DesignCenterApplicationScope
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#scope DesignCenterApplication#scope}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.source"></a>

```python
source: DesignCenterApplicationSource
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#source DesignCenterApplication#source}

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.space"></a>

```python
space: str
```

- *Type:* str

The space for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#space DesignCenterApplication#space}

---

##### `app_parameters`<sup>Optional</sup> <a name="app_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.appParameters"></a>

```python
app_parameters: IResolvable | typing.List[DesignCenterApplicationAppParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>]

app_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#app_parameters DesignCenterApplication#app_parameters}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.attributes"></a>

```python
attributes: DesignCenterApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#attributes DesignCenterApplication#attributes}

---

##### `component_parameters`<sup>Optional</sup> <a name="component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.componentParameters"></a>

```python
component_parameters: IResolvable | typing.List[DesignCenterApplicationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>]

component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#component_parameters DesignCenterApplication#component_parameters}

---

##### `composite_application_parameters`<sup>Optional</sup> <a name="composite_application_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.compositeApplicationParameters"></a>

```python
composite_application_parameters: DesignCenterApplicationCompositeApplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

composite_application_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#composite_application_parameters DesignCenterApplication#composite_application_parameters}

---

##### `connection_configs`<sup>Optional</sup> <a name="connection_configs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.connectionConfigs"></a>

```python
connection_configs: IResolvable | typing.List[DesignCenterApplicationConnectionConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>]

connection_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#connection_configs DesignCenterApplication#connection_configs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deletion_policy DesignCenterApplication#deletion_policy}

---

##### `deployment_project`<sup>Optional</sup> <a name="deployment_project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentProject"></a>

```python
deployment_project: str
```

- *Type:* str

Deployment project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_project DesignCenterApplication#deployment_project}

---

##### `deployment_region`<sup>Optional</sup> <a name="deployment_region" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentRegion"></a>

```python
deployment_region: str
```

- *Type:* str

Deployment region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_region DesignCenterApplication#deployment_region}

---

##### `deployment_target`<sup>Optional</sup> <a name="deployment_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.deploymentTarget"></a>

```python
deployment_target: DesignCenterApplicationDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#deployment_target DesignCenterApplication#deployment_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#description DesignCenterApplication#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#display_name DesignCenterApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#id DesignCenterApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project DesignCenterApplication#project}.

---

##### `roles_apis_config`<sup>Optional</sup> <a name="roles_apis_config" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.rolesApisConfig"></a>

```python
roles_apis_config: IResolvable | typing.List[DesignCenterApplicationRolesApisConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>]

roles_apis_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#roles_apis_config DesignCenterApplication#roles_apis_config}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account for deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#service_account DesignCenterApplication#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConfig.property.timeouts"></a>

```python
timeouts: DesignCenterApplicationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#timeouts DesignCenterApplication#timeouts}

---

### DesignCenterApplicationConnectionConfigs <a name="DesignCenterApplicationConnectionConfigs" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationConnectionConfigs(
  connection_uri: str,
  destination_component_parameters: IResolvable | typing.List[DesignCenterApplicationConnectionConfigsDestinationComponentParameters] = None,
  source_component_parameters: IResolvable | typing.List[DesignCenterApplicationConnectionConfigsSourceComponentParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.connectionUri">connection_uri</a></code> | <code>str</code> | The URI of the connection. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.destinationComponentParameters">destination_component_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]</code> | destination_component_parameters block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.sourceComponentParameters">source_component_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]</code> | source_component_parameters block. |

---

##### `connection_uri`<sup>Required</sup> <a name="connection_uri" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.connectionUri"></a>

```python
connection_uri: str
```

- *Type:* str

The URI of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#connection_uri DesignCenterApplication#connection_uri}

---

##### `destination_component_parameters`<sup>Optional</sup> <a name="destination_component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.destinationComponentParameters"></a>

```python
destination_component_parameters: IResolvable | typing.List[DesignCenterApplicationConnectionConfigsDestinationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]

destination_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#destination_component_parameters DesignCenterApplication#destination_component_parameters}

---

##### `source_component_parameters`<sup>Optional</sup> <a name="source_component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs.property.sourceComponentParameters"></a>

```python
source_component_parameters: IResolvable | typing.List[DesignCenterApplicationConnectionConfigsSourceComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]

source_component_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#source_component_parameters DesignCenterApplication#source_component_parameters}

---

### DesignCenterApplicationConnectionConfigsDestinationComponentParameters <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key">key</a></code> | <code>str</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value">value</a></code> | <code>str</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationConnectionConfigsSourceComponentParameters <a name="DesignCenterApplicationConnectionConfigsSourceComponentParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key">key</a></code> | <code>str</code> | The key of the parameter. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value">value</a></code> | <code>str</code> | The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#key DesignCenterApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the parameter, as a JSON-encoded string. Use 'jsonencode()' to set it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#value DesignCenterApplication#value}

---

### DesignCenterApplicationDeploymentMetadata <a name="DesignCenterApplicationDeploymentMetadata" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadata()
```


### DesignCenterApplicationDeploymentMetadataComponentOutputParameters <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters()
```


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters()
```


### DesignCenterApplicationDeploymentMetadataError <a name="DesignCenterApplicationDeploymentMetadataError" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadataError()
```


### DesignCenterApplicationDeploymentTarget <a name="DesignCenterApplicationDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentTarget(
  gke_deployment_target: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget">gke_deployment_target</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | gke_deployment_target block. |

---

##### `gke_deployment_target`<sup>Optional</sup> <a name="gke_deployment_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget.property.gkeDeploymentTarget"></a>

```python
gke_deployment_target: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

gke_deployment_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#gke_deployment_target DesignCenterApplication#gke_deployment_target}

---

### DesignCenterApplicationDeploymentTargetGkeDeploymentTarget <a name="DesignCenterApplicationDeploymentTargetGkeDeploymentTarget" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget(
  cluster_self_link: str,
  kubernetes_service_account: str,
  namespace: str,
  kubernetes_service_account_creation: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink">cluster_self_link</a></code> | <code>str</code> | The self link of the cluster where the GKE based application is deployed. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount">kubernetes_service_account</a></code> | <code>str</code> | The Kubernetes service account in the namespace, such as 'default'. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace">namespace</a></code> | <code>str</code> | The namespace where the application is deployed. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation">kubernetes_service_account_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to create the Kubernetes service account. |

---

##### `cluster_self_link`<sup>Required</sup> <a name="cluster_self_link" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.clusterSelfLink"></a>

```python
cluster_self_link: str
```

- *Type:* str

The self link of the cluster where the GKE based application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#cluster_self_link DesignCenterApplication#cluster_self_link}

---

##### `kubernetes_service_account`<sup>Required</sup> <a name="kubernetes_service_account" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccount"></a>

```python
kubernetes_service_account: str
```

- *Type:* str

The Kubernetes service account in the namespace, such as 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account DesignCenterApplication#kubernetes_service_account}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace where the application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#namespace DesignCenterApplication#namespace}

---

##### `kubernetes_service_account_creation`<sup>Optional</sup> <a name="kubernetes_service_account_creation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget.property.kubernetesServiceAccountCreation"></a>

```python
kubernetes_service_account_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to create the Kubernetes service account.

If 'true', the
service account is created in the namespace. If 'false', the
service account must already exist in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account_creation DesignCenterApplication#kubernetes_service_account_creation}

---

### DesignCenterApplicationRolesApisConfig <a name="DesignCenterApplicationRolesApisConfig" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationRolesApisConfig(
  project_id: str,
  apis: IResolvable | typing.List[DesignCenterApplicationRolesApisConfigApis] = None,
  roles: IResolvable | typing.List[DesignCenterApplicationRolesApisConfigRoles] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.projectId">project_id</a></code> | <code>str</code> | The project ID to which these configurations apply. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.apis">apis</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>]</code> | apis block. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.roles">roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>]</code> | roles block. |

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project ID to which these configurations apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#project_id DesignCenterApplication#project_id}

---

##### `apis`<sup>Optional</sup> <a name="apis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.apis"></a>

```python
apis: IResolvable | typing.List[DesignCenterApplicationRolesApisConfigApis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>]

apis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#apis DesignCenterApplication#apis}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig.property.roles"></a>

```python
roles: IResolvable | typing.List[DesignCenterApplicationRolesApisConfigRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>]

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#roles DesignCenterApplication#roles}

---

### DesignCenterApplicationRolesApisConfigApis <a name="DesignCenterApplicationRolesApisConfigApis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationRolesApisConfigApis(
  api: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.property.api">api</a></code> | <code>str</code> | API name, such as 'compute.googleapis.com'. |

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis.property.api"></a>

```python
api: str
```

- *Type:* str

API name, such as 'compute.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#api DesignCenterApplication#api}

---

### DesignCenterApplicationRolesApisConfigRoles <a name="DesignCenterApplicationRolesApisConfigRoles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationRolesApisConfigRoles(
  role: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.property.role">role</a></code> | <code>str</code> | IAM role name, such as 'roles/editor'. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles.property.role"></a>

```python
role: str
```

- *Type:* str

IAM role name, such as 'roles/editor'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#role DesignCenterApplication#role}

---

### DesignCenterApplicationScope <a name="DesignCenterApplicationScope" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationScope(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.property.type">type</a></code> | <code>str</code> | Scope type. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope.property.type"></a>

```python
type: str
```

- *Type:* str

Scope type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

### DesignCenterApplicationSource <a name="DesignCenterApplicationSource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationSource(
  application_template_revision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.property.applicationTemplateRevision">application_template_revision</a></code> | <code>str</code> | Application template revision URI. |

---

##### `application_template_revision`<sup>Optional</sup> <a name="application_template_revision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource.property.applicationTemplateRevision"></a>

```python
application_template_revision: str
```

- *Type:* str

Application template revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#application_template_revision DesignCenterApplication#application_template_revision}

---

### DesignCenterApplicationTimeouts <a name="DesignCenterApplicationTimeouts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#create DesignCenterApplication#create}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#delete DesignCenterApplication#delete}. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#update DesignCenterApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#create DesignCenterApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#delete DesignCenterApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#update DesignCenterApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DesignCenterApplicationAppParametersList <a name="DesignCenterApplicationAppParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAppParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationAppParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationAppParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>]

---


### DesignCenterApplicationAppParametersOutputReference <a name="DesignCenterApplicationAppParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAppParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationAppParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAppParameters">DesignCenterApplicationAppParameters</a>

---


### DesignCenterApplicationAttributesBusinessOwnersList <a name="DesignCenterApplicationAttributesBusinessOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationAttributesBusinessOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationAttributesBusinessOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>]

---


### DesignCenterApplicationAttributesBusinessOwnersOutputReference <a name="DesignCenterApplicationAttributesBusinessOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationAttributesBusinessOwners
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>

---


### DesignCenterApplicationAttributesCriticalityOutputReference <a name="DesignCenterApplicationAttributesCriticalityOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

---


### DesignCenterApplicationAttributesDeveloperOwnersList <a name="DesignCenterApplicationAttributesDeveloperOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationAttributesDeveloperOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationAttributesDeveloperOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>]

---


### DesignCenterApplicationAttributesDeveloperOwnersOutputReference <a name="DesignCenterApplicationAttributesDeveloperOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationAttributesDeveloperOwners
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>

---


### DesignCenterApplicationAttributesEnvironmentOutputReference <a name="DesignCenterApplicationAttributesEnvironmentOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

---


### DesignCenterApplicationAttributesOperatorOwnersList <a name="DesignCenterApplicationAttributesOperatorOwnersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationAttributesOperatorOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationAttributesOperatorOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>]

---


### DesignCenterApplicationAttributesOperatorOwnersOutputReference <a name="DesignCenterApplicationAttributesOperatorOwnersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationAttributesOperatorOwners
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>

---


### DesignCenterApplicationAttributesOutputReference <a name="DesignCenterApplicationAttributesOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners">put_business_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality">put_criticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners">put_developer_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners">put_operator_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetBusinessOwners">reset_business_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetCriticality">reset_criticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetDeveloperOwners">reset_developer_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetOperatorOwners">reset_operator_owners</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_business_owners` <a name="put_business_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners"></a>

```python
def put_business_owners(
  value: IResolvable | typing.List[DesignCenterApplicationAttributesBusinessOwners]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>]

---

##### `put_criticality` <a name="put_criticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality"></a>

```python
def put_criticality(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putCriticality.parameter.type"></a>

- *Type:* str

Criticality type. Possible values are 'MISSION_CRITICAL', 'HIGH', 'MEDIUM' and 'LOW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

##### `put_developer_owners` <a name="put_developer_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners"></a>

```python
def put_developer_owners(
  value: IResolvable | typing.List[DesignCenterApplicationAttributesDeveloperOwners]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>]

---

##### `put_environment` <a name="put_environment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment"></a>

```python
def put_environment(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putEnvironment.parameter.type"></a>

- *Type:* str

Environment type. Possible values are 'PRODUCTION', 'STAGING', 'TEST' and 'DEVELOPMENT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#type DesignCenterApplication#type}

---

##### `put_operator_owners` <a name="put_operator_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners"></a>

```python
def put_operator_owners(
  value: IResolvable | typing.List[DesignCenterApplicationAttributesOperatorOwners]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>]

---

##### `reset_business_owners` <a name="reset_business_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetBusinessOwners"></a>

```python
def reset_business_owners() -> None
```

##### `reset_criticality` <a name="reset_criticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetCriticality"></a>

```python
def reset_criticality() -> None
```

##### `reset_developer_owners` <a name="reset_developer_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetDeveloperOwners"></a>

```python
def reset_developer_owners() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_operator_owners` <a name="reset_operator_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.resetOperatorOwners"></a>

```python
def reset_operator_owners() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwners">business_owners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList">DesignCenterApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference">DesignCenterApplicationAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwners">developer_owners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList">DesignCenterApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference">DesignCenterApplicationAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwners">operator_owners</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList">DesignCenterApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwnersInput">business_owners_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticalityInput">criticality_input</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwnersInput">developer_owners_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environmentInput">environment_input</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput">operator_owners_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `business_owners`<sup>Required</sup> <a name="business_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwners"></a>

```python
business_owners: DesignCenterApplicationAttributesBusinessOwnersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwnersList">DesignCenterApplicationAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticality"></a>

```python
criticality: DesignCenterApplicationAttributesCriticalityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticalityOutputReference">DesignCenterApplicationAttributesCriticalityOutputReference</a>

---

##### `developer_owners`<sup>Required</sup> <a name="developer_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwners"></a>

```python
developer_owners: DesignCenterApplicationAttributesDeveloperOwnersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwnersList">DesignCenterApplicationAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environment"></a>

```python
environment: DesignCenterApplicationAttributesEnvironmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironmentOutputReference">DesignCenterApplicationAttributesEnvironmentOutputReference</a>

---

##### `operator_owners`<sup>Required</sup> <a name="operator_owners" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwners"></a>

```python
operator_owners: DesignCenterApplicationAttributesOperatorOwnersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwnersList">DesignCenterApplicationAttributesOperatorOwnersList</a>

---

##### `business_owners_input`<sup>Optional</sup> <a name="business_owners_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.businessOwnersInput"></a>

```python
business_owners_input: IResolvable | typing.List[DesignCenterApplicationAttributesBusinessOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesBusinessOwners">DesignCenterApplicationAttributesBusinessOwners</a>]

---

##### `criticality_input`<sup>Optional</sup> <a name="criticality_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.criticalityInput"></a>

```python
criticality_input: DesignCenterApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesCriticality">DesignCenterApplicationAttributesCriticality</a>

---

##### `developer_owners_input`<sup>Optional</sup> <a name="developer_owners_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.developerOwnersInput"></a>

```python
developer_owners_input: IResolvable | typing.List[DesignCenterApplicationAttributesDeveloperOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesDeveloperOwners">DesignCenterApplicationAttributesDeveloperOwners</a>]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.environmentInput"></a>

```python
environment_input: DesignCenterApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesEnvironment">DesignCenterApplicationAttributesEnvironment</a>

---

##### `operator_owners_input`<sup>Optional</sup> <a name="operator_owners_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.operatorOwnersInput"></a>

```python
operator_owners_input: IResolvable | typing.List[DesignCenterApplicationAttributesOperatorOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOperatorOwners">DesignCenterApplicationAttributesOperatorOwners</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationAttributes
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationAttributes">DesignCenterApplicationAttributes</a>

---


### DesignCenterApplicationComponentParametersList <a name="DesignCenterApplicationComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationComponentParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>]

---


### DesignCenterApplicationComponentParametersOutputReference <a name="DesignCenterApplicationComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationComponentParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[DesignCenterApplicationComponentParametersParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList">DesignCenterApplicationComponentParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.componentInput">component_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parameters"></a>

```python
parameters: DesignCenterApplicationComponentParametersParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList">DesignCenterApplicationComponentParametersParametersList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `component_input`<sup>Optional</sup> <a name="component_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.componentInput"></a>

```python
component_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[DesignCenterApplicationComponentParametersParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>]

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationComponentParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParameters">DesignCenterApplicationComponentParameters</a>

---


### DesignCenterApplicationComponentParametersParametersList <a name="DesignCenterApplicationComponentParametersParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationComponentParametersParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationComponentParametersParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationComponentParametersParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>]

---


### DesignCenterApplicationComponentParametersParametersOutputReference <a name="DesignCenterApplicationComponentParametersParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationComponentParametersParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationComponentParametersParameters">DesignCenterApplicationComponentParametersParameters</a>

---


### DesignCenterApplicationCompositeApplicationParametersOutputReference <a name="DesignCenterApplicationCompositeApplicationParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap">reset_service_account_map</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_account_map` <a name="reset_service_account_map" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.resetServiceAccountMap"></a>

```python
def reset_service_account_map() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput">service_account_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap">service_account_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account_map_input`<sup>Optional</sup> <a name="service_account_map_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMapInput"></a>

```python
service_account_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_account_map`<sup>Required</sup> <a name="service_account_map" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.serviceAccountMap"></a>

```python
service_account_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParametersOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationCompositeApplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationCompositeApplicationParameters">DesignCenterApplicationCompositeApplicationParameters</a>

---


### DesignCenterApplicationConnectionConfigsDestinationComponentParametersList <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationConnectionConfigsDestinationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]

---


### DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference <a name="DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationConnectionConfigsDestinationComponentParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>

---


### DesignCenterApplicationConnectionConfigsList <a name="DesignCenterApplicationConnectionConfigsList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationConnectionConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationConnectionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationConnectionConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>]

---


### DesignCenterApplicationConnectionConfigsOutputReference <a name="DesignCenterApplicationConnectionConfigsOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters">put_destination_component_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters">put_source_component_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters">reset_destination_component_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters">reset_source_component_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_component_parameters` <a name="put_destination_component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters"></a>

```python
def put_destination_component_parameters(
  value: IResolvable | typing.List[DesignCenterApplicationConnectionConfigsDestinationComponentParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putDestinationComponentParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]

---

##### `put_source_component_parameters` <a name="put_source_component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters"></a>

```python
def put_source_component_parameters(
  value: IResolvable | typing.List[DesignCenterApplicationConnectionConfigsSourceComponentParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.putSourceComponentParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]

---

##### `reset_destination_component_parameters` <a name="reset_destination_component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetDestinationComponentParameters"></a>

```python
def reset_destination_component_parameters() -> None
```

##### `reset_source_component_parameters` <a name="reset_source_component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.resetSourceComponentParameters"></a>

```python
def reset_source_component_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters">destination_component_parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList">DesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters">source_component_parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList">DesignCenterApplicationConnectionConfigsSourceComponentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput">connection_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput">destination_component_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput">source_component_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri">connection_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_component_parameters`<sup>Required</sup> <a name="destination_component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParameters"></a>

```python
destination_component_parameters: DesignCenterApplicationConnectionConfigsDestinationComponentParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParametersList">DesignCenterApplicationConnectionConfigsDestinationComponentParametersList</a>

---

##### `source_component_parameters`<sup>Required</sup> <a name="source_component_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParameters"></a>

```python
source_component_parameters: DesignCenterApplicationConnectionConfigsSourceComponentParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList">DesignCenterApplicationConnectionConfigsSourceComponentParametersList</a>

---

##### `connection_uri_input`<sup>Optional</sup> <a name="connection_uri_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUriInput"></a>

```python
connection_uri_input: str
```

- *Type:* str

---

##### `destination_component_parameters_input`<sup>Optional</sup> <a name="destination_component_parameters_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.destinationComponentParametersInput"></a>

```python
destination_component_parameters_input: IResolvable | typing.List[DesignCenterApplicationConnectionConfigsDestinationComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsDestinationComponentParameters">DesignCenterApplicationConnectionConfigsDestinationComponentParameters</a>]

---

##### `source_component_parameters_input`<sup>Optional</sup> <a name="source_component_parameters_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.sourceComponentParametersInput"></a>

```python
source_component_parameters_input: IResolvable | typing.List[DesignCenterApplicationConnectionConfigsSourceComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]

---

##### `connection_uri`<sup>Required</sup> <a name="connection_uri" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.connectionUri"></a>

```python
connection_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationConnectionConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigs">DesignCenterApplicationConnectionConfigs</a>

---


### DesignCenterApplicationConnectionConfigsSourceComponentParametersList <a name="DesignCenterApplicationConnectionConfigsSourceComponentParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationConnectionConfigsSourceComponentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>]

---


### DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference <a name="DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationConnectionConfigsSourceComponentParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationConnectionConfigsSourceComponentParameters">DesignCenterApplicationConnectionConfigsSourceComponentParameters</a>

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersList <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.parameters"></a>

```python
parameters: DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationDeploymentMetadataComponentOutputParameters
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParameters</a>

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference <a name="DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParametersOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters">DesignCenterApplicationDeploymentMetadataComponentOutputParametersParameters</a>

---


### DesignCenterApplicationDeploymentMetadataErrorList <a name="DesignCenterApplicationDeploymentMetadataErrorList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationDeploymentMetadataErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DesignCenterApplicationDeploymentMetadataErrorOutputReference <a name="DesignCenterApplicationDeploymentMetadataErrorOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail">detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError">DesignCenterApplicationDeploymentMetadataError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.detail"></a>

```python
detail: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationDeploymentMetadataError
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataError">DesignCenterApplicationDeploymentMetadataError</a>

---


### DesignCenterApplicationDeploymentMetadataList <a name="DesignCenterApplicationDeploymentMetadataList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationDeploymentMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DesignCenterApplicationDeploymentMetadataOutputReference <a name="DesignCenterApplicationDeploymentMetadataOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute">build_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters">component_output_parameters</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList">DesignCenterApplicationDeploymentMetadataErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts">retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool">worker_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata">DesignCenterApplicationDeploymentMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_attribute`<sup>Required</sup> <a name="build_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.buildAttribute"></a>

```python
build_attribute: str
```

- *Type:* str

---

##### `component_output_parameters`<sup>Required</sup> <a name="component_output_parameters" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.componentOutputParameters"></a>

```python
component_output_parameters: DesignCenterApplicationDeploymentMetadataComponentOutputParametersList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataComponentOutputParametersList">DesignCenterApplicationDeploymentMetadataComponentOutputParametersList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.error"></a>

```python
error: DesignCenterApplicationDeploymentMetadataErrorList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataErrorList">DesignCenterApplicationDeploymentMetadataErrorList</a>

---

##### `retry_attempts`<sup>Required</sup> <a name="retry_attempts" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.retryAttempts"></a>

```python
retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `worker_pool`<sup>Required</sup> <a name="worker_pool" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationDeploymentMetadata
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentMetadata">DesignCenterApplicationDeploymentMetadata</a>

---


### DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference <a name="DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation">reset_kubernetes_service_account_creation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kubernetes_service_account_creation` <a name="reset_kubernetes_service_account_creation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.resetKubernetesServiceAccountCreation"></a>

```python
def reset_kubernetes_service_account_creation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput">cluster_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput">kubernetes_service_account_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput">kubernetes_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink">cluster_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount">kubernetes_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation">kubernetes_service_account_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_self_link_input`<sup>Optional</sup> <a name="cluster_self_link_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLinkInput"></a>

```python
cluster_self_link_input: str
```

- *Type:* str

---

##### `kubernetes_service_account_creation_input`<sup>Optional</sup> <a name="kubernetes_service_account_creation_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreationInput"></a>

```python
kubernetes_service_account_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kubernetes_service_account_input`<sup>Optional</sup> <a name="kubernetes_service_account_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountInput"></a>

```python
kubernetes_service_account_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `cluster_self_link`<sup>Required</sup> <a name="cluster_self_link" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.clusterSelfLink"></a>

```python
cluster_self_link: str
```

- *Type:* str

---

##### `kubernetes_service_account`<sup>Required</sup> <a name="kubernetes_service_account" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccount"></a>

```python
kubernetes_service_account: str
```

- *Type:* str

---

##### `kubernetes_service_account_creation`<sup>Required</sup> <a name="kubernetes_service_account_creation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.kubernetesServiceAccountCreation"></a>

```python
kubernetes_service_account_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---


### DesignCenterApplicationDeploymentTargetOutputReference <a name="DesignCenterApplicationDeploymentTargetOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget">put_gke_deployment_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget">reset_gke_deployment_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gke_deployment_target` <a name="put_gke_deployment_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget"></a>

```python
def put_gke_deployment_target(
  cluster_self_link: str,
  kubernetes_service_account: str,
  namespace: str,
  kubernetes_service_account_creation: bool | IResolvable = None
) -> None
```

###### `cluster_self_link`<sup>Required</sup> <a name="cluster_self_link" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.clusterSelfLink"></a>

- *Type:* str

The self link of the cluster where the GKE based application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#cluster_self_link DesignCenterApplication#cluster_self_link}

---

###### `kubernetes_service_account`<sup>Required</sup> <a name="kubernetes_service_account" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.kubernetesServiceAccount"></a>

- *Type:* str

The Kubernetes service account in the namespace, such as 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account DesignCenterApplication#kubernetes_service_account}

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.namespace"></a>

- *Type:* str

The namespace where the application is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#namespace DesignCenterApplication#namespace}

---

###### `kubernetes_service_account_creation`<sup>Optional</sup> <a name="kubernetes_service_account_creation" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.putGkeDeploymentTarget.parameter.kubernetesServiceAccountCreation"></a>

- *Type:* bool | cdktn.IResolvable

Whether to create the Kubernetes service account.

If 'true', the
service account is created in the namespace. If 'false', the
service account must already exist in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_application#kubernetes_service_account_creation DesignCenterApplication#kubernetes_service_account_creation}

---

##### `reset_gke_deployment_target` <a name="reset_gke_deployment_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.resetGkeDeploymentTarget"></a>

```python
def reset_gke_deployment_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget">gke_deployment_target</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput">gke_deployment_target_input</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gke_deployment_target`<sup>Required</sup> <a name="gke_deployment_target" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTarget"></a>

```python
gke_deployment_target: DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference">DesignCenterApplicationDeploymentTargetGkeDeploymentTargetOutputReference</a>

---

##### `gke_deployment_target_input`<sup>Optional</sup> <a name="gke_deployment_target_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.gkeDeploymentTargetInput"></a>

```python
gke_deployment_target_input: DesignCenterApplicationDeploymentTargetGkeDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetGkeDeploymentTarget">DesignCenterApplicationDeploymentTargetGkeDeploymentTarget</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTargetOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationDeploymentTarget
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationDeploymentTarget">DesignCenterApplicationDeploymentTarget</a>

---


### DesignCenterApplicationRolesApisConfigApisList <a name="DesignCenterApplicationRolesApisConfigApisList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationRolesApisConfigApisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationRolesApisConfigApisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationRolesApisConfigApis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>]

---


### DesignCenterApplicationRolesApisConfigApisOutputReference <a name="DesignCenterApplicationRolesApisConfigApisOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided">system_provided</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput">api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_provided`<sup>Required</sup> <a name="system_provided" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.systemProvided"></a>

```python
system_provided: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `api_input`<sup>Optional</sup> <a name="api_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.apiInput"></a>

```python
api_input: str
```

- *Type:* str

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationRolesApisConfigApis
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>

---


### DesignCenterApplicationRolesApisConfigList <a name="DesignCenterApplicationRolesApisConfigList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationRolesApisConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationRolesApisConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationRolesApisConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>]

---


### DesignCenterApplicationRolesApisConfigOutputReference <a name="DesignCenterApplicationRolesApisConfigOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis">put_apis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetApis">reset_apis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetRoles">reset_roles</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_apis` <a name="put_apis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis"></a>

```python
def put_apis(
  value: IResolvable | typing.List[DesignCenterApplicationRolesApisConfigApis]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putApis.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>]

---

##### `put_roles` <a name="put_roles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles"></a>

```python
def put_roles(
  value: IResolvable | typing.List[DesignCenterApplicationRolesApisConfigRoles]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.putRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>]

---

##### `reset_apis` <a name="reset_apis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetApis"></a>

```python
def reset_apis() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.resetRoles"></a>

```python
def reset_roles() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apis">apis</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList">DesignCenterApplicationRolesApisConfigApisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList">DesignCenterApplicationRolesApisConfigRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apisInput">apis_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput">roles_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apis`<sup>Required</sup> <a name="apis" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apis"></a>

```python
apis: DesignCenterApplicationRolesApisConfigApisList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApisList">DesignCenterApplicationRolesApisConfigApisList</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.roles"></a>

```python
roles: DesignCenterApplicationRolesApisConfigRolesList
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList">DesignCenterApplicationRolesApisConfigRolesList</a>

---

##### `apis_input`<sup>Optional</sup> <a name="apis_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.apisInput"></a>

```python
apis_input: IResolvable | typing.List[DesignCenterApplicationRolesApisConfigApis]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigApis">DesignCenterApplicationRolesApisConfigApis</a>]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.rolesInput"></a>

```python
roles_input: IResolvable | typing.List[DesignCenterApplicationRolesApisConfigRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationRolesApisConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfig">DesignCenterApplicationRolesApisConfig</a>

---


### DesignCenterApplicationRolesApisConfigRolesList <a name="DesignCenterApplicationRolesApisConfigRolesList" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DesignCenterApplicationRolesApisConfigRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DesignCenterApplicationRolesApisConfigRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>]

---


### DesignCenterApplicationRolesApisConfigRolesOutputReference <a name="DesignCenterApplicationRolesApisConfigRolesOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided">system_provided</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_provided`<sup>Required</sup> <a name="system_provided" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.systemProvided"></a>

```python
system_provided: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationRolesApisConfigRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationRolesApisConfigRoles">DesignCenterApplicationRolesApisConfigRoles</a>

---


### DesignCenterApplicationScopeOutputReference <a name="DesignCenterApplicationScopeOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScopeOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationScope
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationScope">DesignCenterApplicationScope</a>

---


### DesignCenterApplicationSourceOutputReference <a name="DesignCenterApplicationSourceOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision">reset_application_template_revision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_template_revision` <a name="reset_application_template_revision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.resetApplicationTemplateRevision"></a>

```python
def reset_application_template_revision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput">application_template_revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision">application_template_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_template_revision_input`<sup>Optional</sup> <a name="application_template_revision_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevisionInput"></a>

```python
application_template_revision_input: str
```

- *Type:* str

---

##### `application_template_revision`<sup>Required</sup> <a name="application_template_revision" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.applicationTemplateRevision"></a>

```python
application_template_revision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSourceOutputReference.property.internalValue"></a>

```python
internal_value: DesignCenterApplicationSource
```

- *Type:* <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationSource">DesignCenterApplicationSource</a>

---


### DesignCenterApplicationTimeoutsOutputReference <a name="DesignCenterApplicationTimeoutsOutputReference" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import design_center_application

designCenterApplication.DesignCenterApplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DesignCenterApplicationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterApplication.DesignCenterApplicationTimeouts">DesignCenterApplicationTimeouts</a>

---



