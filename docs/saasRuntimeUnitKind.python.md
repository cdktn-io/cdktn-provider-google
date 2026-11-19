# `saasRuntimeUnitKind` Submodule <a name="`saasRuntimeUnitKind` Submodule" id="@cdktn/provider-google.saasRuntimeUnitKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnitKind <a name="SaasRuntimeUnitKind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind google_saas_runtime_unit_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKind(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  saas: str,
  unit_kind_id: str,
  annotations: typing.Mapping[str] = None,
  application_template_component: SaasRuntimeUnitKindApplicationTemplateComponent = None,
  app_params: SaasRuntimeUnitKindAppParams = None,
  default_release: str = None,
  deletion_policy: str = None,
  dependencies: IResolvable | typing.List[SaasRuntimeUnitKindDependencies] = None,
  id: str = None,
  input_variable_mappings: IResolvable | typing.List[SaasRuntimeUnitKindInputVariableMappings] = None,
  labels: typing.Mapping[str] = None,
  output_variable_mappings: IResolvable | typing.List[SaasRuntimeUnitKindOutputVariableMappings] = None,
  project: str = None,
  timeouts: SaasRuntimeUnitKindTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.saas">saas</a></code> | <code>str</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.unitKindId">unit_kind_id</a></code> | <code>str</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.applicationTemplateComponent">application_template_component</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | application_template_component block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.appParams">app_params</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | app_params block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.defaultRelease">default_release</a></code> | <code>str</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.dependencies">dependencies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>]</code> | dependencies block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.inputVariableMappings">input_variable_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>]</code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.outputVariableMappings">output_variable_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>]</code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#location SaasRuntimeUnitKind#location}

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.saas"></a>

- *Type:* str

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#saas SaasRuntimeUnitKind#saas}

---

##### `unit_kind_id`<sup>Required</sup> <a name="unit_kind_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.unitKindId"></a>

- *Type:* str

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind_id SaasRuntimeUnitKind#unit_kind_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#annotations SaasRuntimeUnitKind#annotations}

---

##### `application_template_component`<sup>Optional</sup> <a name="application_template_component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.applicationTemplateComponent"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

application_template_component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template_component SaasRuntimeUnitKind#application_template_component}

---

##### `app_params`<sup>Optional</sup> <a name="app_params" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.appParams"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

app_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#app_params SaasRuntimeUnitKind#app_params}

---

##### `default_release`<sup>Optional</sup> <a name="default_release" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.defaultRelease"></a>

- *Type:* str

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#default_release SaasRuntimeUnitKind#default_release}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#deletion_policy SaasRuntimeUnitKind#deletion_policy}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.dependencies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>]

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependencies SaasRuntimeUnitKind#dependencies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_variable_mappings`<sup>Optional</sup> <a name="input_variable_mappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.inputVariableMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>]

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable_mappings SaasRuntimeUnitKind#input_variable_mappings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#labels SaasRuntimeUnitKind#labels}

---

##### `output_variable_mappings`<sup>Optional</sup> <a name="output_variable_mappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.outputVariableMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>]

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable_mappings SaasRuntimeUnitKind#output_variable_mappings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#timeouts SaasRuntimeUnitKind#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent">put_application_template_component</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams">put_app_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies">put_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings">put_input_variable_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings">put_output_variable_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetApplicationTemplateComponent">reset_application_template_component</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAppParams">reset_app_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDefaultRelease">reset_default_release</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDependencies">reset_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetInputVariableMappings">reset_input_variable_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOutputVariableMappings">reset_output_variable_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_template_component` <a name="put_application_template_component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent"></a>

```python
def put_application_template_component(
  component: str = None,
  composite_ref: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef = None,
  revision: str = None
) -> None
```

###### `component`<sup>Optional</sup> <a name="component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent.parameter.component"></a>

- *Type:* str

Name of the component in the composite ApplicationTemplate (the root module ID, e.g. a composite component ID or 'native-components').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#component SaasRuntimeUnitKind#component}

---

###### `composite_ref`<sup>Optional</sup> <a name="composite_ref" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent.parameter.compositeRef"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

composite_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#composite_ref SaasRuntimeUnitKind#composite_ref}

---

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent.parameter.revision"></a>

- *Type:* str

Revision of the component. If the component does not have a revision, this is the revision of the composite ApplicationTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}

---

##### `put_app_params` <a name="put_app_params" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams"></a>

```python
def put_app_params(
  group: str = None,
  scope: SaasRuntimeUnitKindAppParamsScope = None
) -> None
```

###### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams.parameter.group"></a>

- *Type:* str

Grouping used to construct the name of the App Hub Application.

Multiple UnitKinds can specify the same group to use the same
Application across their respective Units. Corresponds to the
app_boundary_id in the ADC composite ApplicationTemplate. If empty,
the service creates no App Hub application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#group SaasRuntimeUnitKind#group}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#scope SaasRuntimeUnitKind#scope}

---

##### `put_dependencies` <a name="put_dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies"></a>

```python
def put_dependencies(
  value: IResolvable | typing.List[SaasRuntimeUnitKindDependencies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>]

---

##### `put_input_variable_mappings` <a name="put_input_variable_mappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings"></a>

```python
def put_input_variable_mappings(
  value: IResolvable | typing.List[SaasRuntimeUnitKindInputVariableMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>]

---

##### `put_output_variable_mappings` <a name="put_output_variable_mappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings"></a>

```python
def put_output_variable_mappings(
  value: IResolvable | typing.List[SaasRuntimeUnitKindOutputVariableMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#create SaasRuntimeUnitKind#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#delete SaasRuntimeUnitKind#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#update SaasRuntimeUnitKind#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_application_template_component` <a name="reset_application_template_component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetApplicationTemplateComponent"></a>

```python
def reset_application_template_component() -> None
```

##### `reset_app_params` <a name="reset_app_params" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAppParams"></a>

```python
def reset_app_params() -> None
```

##### `reset_default_release` <a name="reset_default_release" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDefaultRelease"></a>

```python
def reset_default_release() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_dependencies` <a name="reset_dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDependencies"></a>

```python
def reset_dependencies() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_variable_mappings` <a name="reset_input_variable_mappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetInputVariableMappings"></a>

```python
def reset_input_variable_mappings() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_output_variable_mappings` <a name="reset_output_variable_mappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOutputVariableMappings"></a>

```python
def reset_output_variable_mappings() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKind.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKind.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKind.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKind.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SaasRuntimeUnitKind to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SaasRuntimeUnitKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnitKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponent">application_template_component</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParams">app_params</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference">SaasRuntimeUnitKindAppParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList">SaasRuntimeUnitKindDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappings">input_variable_mappings</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList">SaasRuntimeUnitKindInputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappings">output_variable_mappings</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList">SaasRuntimeUnitKindOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference">SaasRuntimeUnitKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponentInput">application_template_component_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParamsInput">app_params_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultReleaseInput">default_release_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependenciesInput">dependencies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappingsInput">input_variable_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappingsInput">output_variable_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saasInput">saas_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindIdInput">unit_kind_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultRelease">default_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saas">saas</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindId">unit_kind_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_template_component`<sup>Required</sup> <a name="application_template_component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponent"></a>

```python
application_template_component: SaasRuntimeUnitKindApplicationTemplateComponentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentOutputReference</a>

---

##### `app_params`<sup>Required</sup> <a name="app_params" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParams"></a>

```python
app_params: SaasRuntimeUnitKindAppParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference">SaasRuntimeUnitKindAppParamsOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependencies"></a>

```python
dependencies: SaasRuntimeUnitKindDependenciesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList">SaasRuntimeUnitKindDependenciesList</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `input_variable_mappings`<sup>Required</sup> <a name="input_variable_mappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappings"></a>

```python
input_variable_mappings: SaasRuntimeUnitKindInputVariableMappingsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList">SaasRuntimeUnitKindInputVariableMappingsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_variable_mappings`<sup>Required</sup> <a name="output_variable_mappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappings"></a>

```python
output_variable_mappings: SaasRuntimeUnitKindOutputVariableMappingsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList">SaasRuntimeUnitKindOutputVariableMappingsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeouts"></a>

```python
timeouts: SaasRuntimeUnitKindTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference">SaasRuntimeUnitKindTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application_template_component_input`<sup>Optional</sup> <a name="application_template_component_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponentInput"></a>

```python
application_template_component_input: SaasRuntimeUnitKindApplicationTemplateComponent
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

---

##### `app_params_input`<sup>Optional</sup> <a name="app_params_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParamsInput"></a>

```python
app_params_input: SaasRuntimeUnitKindAppParams
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

---

##### `default_release_input`<sup>Optional</sup> <a name="default_release_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultReleaseInput"></a>

```python
default_release_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `dependencies_input`<sup>Optional</sup> <a name="dependencies_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependenciesInput"></a>

```python
dependencies_input: IResolvable | typing.List[SaasRuntimeUnitKindDependencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_variable_mappings_input`<sup>Optional</sup> <a name="input_variable_mappings_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappingsInput"></a>

```python
input_variable_mappings_input: IResolvable | typing.List[SaasRuntimeUnitKindInputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `output_variable_mappings_input`<sup>Optional</sup> <a name="output_variable_mappings_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappingsInput"></a>

```python
output_variable_mappings_input: IResolvable | typing.List[SaasRuntimeUnitKindOutputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `saas_input`<sup>Optional</sup> <a name="saas_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saasInput"></a>

```python
saas_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SaasRuntimeUnitKindTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

---

##### `unit_kind_id_input`<sup>Optional</sup> <a name="unit_kind_id_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindIdInput"></a>

```python
unit_kind_id_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_release`<sup>Required</sup> <a name="default_release" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultRelease"></a>

```python
default_release: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saas"></a>

```python
saas: str
```

- *Type:* str

---

##### `unit_kind_id`<sup>Required</sup> <a name="unit_kind_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindId"></a>

```python
unit_kind_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitKindApplicationTemplateComponent <a name="SaasRuntimeUnitKindApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent(
  component: str = None,
  composite_ref: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef = None,
  revision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.component">component</a></code> | <code>str</code> | Name of the component in the composite ApplicationTemplate (the root module ID, e.g. a composite component ID or 'native-components'). |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.compositeRef">composite_ref</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | composite_ref block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.revision">revision</a></code> | <code>str</code> | Revision of the component. If the component does not have a revision, this is the revision of the composite ApplicationTemplate. |

---

##### `component`<sup>Optional</sup> <a name="component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.component"></a>

```python
component: str
```

- *Type:* str

Name of the component in the composite ApplicationTemplate (the root module ID, e.g. a composite component ID or 'native-components').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#component SaasRuntimeUnitKind#component}

---

##### `composite_ref`<sup>Optional</sup> <a name="composite_ref" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.compositeRef"></a>

```python
composite_ref: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

composite_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#composite_ref SaasRuntimeUnitKind#composite_ref}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.revision"></a>

```python
revision: str
```

- *Type:* str

Revision of the component. If the component does not have a revision, this is the revision of the composite ApplicationTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}

---

### SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef <a name="SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef(
  application_template: str,
  revision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.applicationTemplate">application_template</a></code> | <code>str</code> | Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.revision">revision</a></code> | <code>str</code> | Revision of the ApplicationTemplate, as a full resource name prefixed by 'application_template'. |

---

##### `application_template`<sup>Required</sup> <a name="application_template" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.applicationTemplate"></a>

```python
application_template: str
```

- *Type:* str

Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template SaasRuntimeUnitKind#application_template}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.revision"></a>

```python
revision: str
```

- *Type:* str

Revision of the ApplicationTemplate, as a full resource name prefixed by 'application_template'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}

---

### SaasRuntimeUnitKindAppParams <a name="SaasRuntimeUnitKindAppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams(
  group: str = None,
  scope: SaasRuntimeUnitKindAppParamsScope = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.group">group</a></code> | <code>str</code> | Grouping used to construct the name of the App Hub Application. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | scope block. |

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.group"></a>

```python
group: str
```

- *Type:* str

Grouping used to construct the name of the App Hub Application.

Multiple UnitKinds can specify the same group to use the same
Application across their respective Units. Corresponds to the
app_boundary_id in the ADC composite ApplicationTemplate. If empty,
the service creates no App Hub application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#group SaasRuntimeUnitKind#group}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.scope"></a>

```python
scope: SaasRuntimeUnitKindAppParamsScope
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#scope SaasRuntimeUnitKind#scope}

---

### SaasRuntimeUnitKindAppParamsScope <a name="SaasRuntimeUnitKindAppParamsScope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.property.type">type</a></code> | <code>str</code> | Scope type. Possible values: TYPE_REGIONAL TYPE_GLOBAL. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.property.type"></a>

```python
type: str
```

- *Type:* str

Scope type. Possible values: TYPE_REGIONAL TYPE_GLOBAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#type SaasRuntimeUnitKind#type}

---

### SaasRuntimeUnitKindConfig <a name="SaasRuntimeUnitKindConfig" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  saas: str,
  unit_kind_id: str,
  annotations: typing.Mapping[str] = None,
  application_template_component: SaasRuntimeUnitKindApplicationTemplateComponent = None,
  app_params: SaasRuntimeUnitKindAppParams = None,
  default_release: str = None,
  deletion_policy: str = None,
  dependencies: IResolvable | typing.List[SaasRuntimeUnitKindDependencies] = None,
  id: str = None,
  input_variable_mappings: IResolvable | typing.List[SaasRuntimeUnitKindInputVariableMappings] = None,
  labels: typing.Mapping[str] = None,
  output_variable_mappings: IResolvable | typing.List[SaasRuntimeUnitKindOutputVariableMappings] = None,
  project: str = None,
  timeouts: SaasRuntimeUnitKindTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.saas">saas</a></code> | <code>str</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.unitKindId">unit_kind_id</a></code> | <code>str</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.applicationTemplateComponent">application_template_component</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | application_template_component block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.appParams">app_params</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | app_params block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.defaultRelease">default_release</a></code> | <code>str</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependencies">dependencies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>]</code> | dependencies block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.inputVariableMappings">input_variable_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>]</code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.outputVariableMappings">output_variable_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>]</code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#location SaasRuntimeUnitKind#location}

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.saas"></a>

```python
saas: str
```

- *Type:* str

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#saas SaasRuntimeUnitKind#saas}

---

##### `unit_kind_id`<sup>Required</sup> <a name="unit_kind_id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.unitKindId"></a>

```python
unit_kind_id: str
```

- *Type:* str

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind_id SaasRuntimeUnitKind#unit_kind_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#annotations SaasRuntimeUnitKind#annotations}

---

##### `application_template_component`<sup>Optional</sup> <a name="application_template_component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.applicationTemplateComponent"></a>

```python
application_template_component: SaasRuntimeUnitKindApplicationTemplateComponent
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

application_template_component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template_component SaasRuntimeUnitKind#application_template_component}

---

##### `app_params`<sup>Optional</sup> <a name="app_params" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.appParams"></a>

```python
app_params: SaasRuntimeUnitKindAppParams
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

app_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#app_params SaasRuntimeUnitKind#app_params}

---

##### `default_release`<sup>Optional</sup> <a name="default_release" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.defaultRelease"></a>

```python
default_release: str
```

- *Type:* str

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#default_release SaasRuntimeUnitKind#default_release}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#deletion_policy SaasRuntimeUnitKind#deletion_policy}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependencies"></a>

```python
dependencies: IResolvable | typing.List[SaasRuntimeUnitKindDependencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>]

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependencies SaasRuntimeUnitKind#dependencies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_variable_mappings`<sup>Optional</sup> <a name="input_variable_mappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.inputVariableMappings"></a>

```python
input_variable_mappings: IResolvable | typing.List[SaasRuntimeUnitKindInputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>]

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable_mappings SaasRuntimeUnitKind#input_variable_mappings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#labels SaasRuntimeUnitKind#labels}

---

##### `output_variable_mappings`<sup>Optional</sup> <a name="output_variable_mappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.outputVariableMappings"></a>

```python
output_variable_mappings: IResolvable | typing.List[SaasRuntimeUnitKindOutputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>]

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable_mappings SaasRuntimeUnitKind#output_variable_mappings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.timeouts"></a>

```python
timeouts: SaasRuntimeUnitKindTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#timeouts SaasRuntimeUnitKind#timeouts}

---

### SaasRuntimeUnitKindDependencies <a name="SaasRuntimeUnitKindDependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies(
  alias: str,
  unit_kind: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.alias">alias</a></code> | <code>str</code> | An alias for the dependency. Used for input variable mapping. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.unitKind">unit_kind</a></code> | <code>str</code> | The unit kind of the dependency. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.alias"></a>

```python
alias: str
```

- *Type:* str

An alias for the dependency. Used for input variable mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#alias SaasRuntimeUnitKind#alias}

---

##### `unit_kind`<sup>Required</sup> <a name="unit_kind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.unitKind"></a>

```python
unit_kind: str
```

- *Type:* str

The unit kind of the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind SaasRuntimeUnitKind#unit_kind}

---

### SaasRuntimeUnitKindInputVariableMappings <a name="SaasRuntimeUnitKindInputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings(
  variable: str,
  from: SaasRuntimeUnitKindInputVariableMappingsFrom = None,
  to: SaasRuntimeUnitKindInputVariableMappingsTo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.variable">variable</a></code> | <code>str</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.variable"></a>

```python
variable: str
```

- *Type:* str

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#variable SaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.from"></a>

```python
from: SaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#from SaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.to"></a>

```python
to: SaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#to SaasRuntimeUnitKind#to}

---

### SaasRuntimeUnitKindInputVariableMappingsFrom <a name="SaasRuntimeUnitKindInputVariableMappingsFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom(
  dependency: str,
  output_variable: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>str</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable">output_variable</a></code> | <code>str</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable"></a>

```python
output_variable: str
```

- *Type:* str

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}

---

### SaasRuntimeUnitKindInputVariableMappingsTo <a name="SaasRuntimeUnitKindInputVariableMappingsTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo(
  dependency: str,
  input_variable: str,
  ignore_for_lookup: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.dependency">dependency</a></code> | <code>str</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable">input_variable</a></code> | <code>str</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup">ignore_for_lookup</a></code> | <code>bool \| cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable"></a>

```python
input_variable: str
```

- *Type:* str

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}

---

##### `ignore_for_lookup`<sup>Optional</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup"></a>

```python
ignore_for_lookup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}

---

### SaasRuntimeUnitKindOutputVariableMappings <a name="SaasRuntimeUnitKindOutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings(
  variable: str,
  from: SaasRuntimeUnitKindOutputVariableMappingsFrom = None,
  to: SaasRuntimeUnitKindOutputVariableMappingsTo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.variable">variable</a></code> | <code>str</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.variable"></a>

```python
variable: str
```

- *Type:* str

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#variable SaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.from"></a>

```python
from: SaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#from SaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.to"></a>

```python
to: SaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#to SaasRuntimeUnitKind#to}

---

### SaasRuntimeUnitKindOutputVariableMappingsFrom <a name="SaasRuntimeUnitKindOutputVariableMappingsFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom(
  dependency: str,
  output_variable: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>str</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable">output_variable</a></code> | <code>str</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable"></a>

```python
output_variable: str
```

- *Type:* str

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}

---

### SaasRuntimeUnitKindOutputVariableMappingsTo <a name="SaasRuntimeUnitKindOutputVariableMappingsTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo(
  dependency: str,
  input_variable: str,
  ignore_for_lookup: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency">dependency</a></code> | <code>str</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable">input_variable</a></code> | <code>str</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup">ignore_for_lookup</a></code> | <code>bool \| cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable"></a>

```python
input_variable: str
```

- *Type:* str

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}

---

##### `ignore_for_lookup`<sup>Optional</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup"></a>

```python
ignore_for_lookup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}

---

### SaasRuntimeUnitKindTimeouts <a name="SaasRuntimeUnitKindTimeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#create SaasRuntimeUnitKind#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#delete SaasRuntimeUnitKind#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#update SaasRuntimeUnitKind#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#create SaasRuntimeUnitKind#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#delete SaasRuntimeUnitKind#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#update SaasRuntimeUnitKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference <a name="SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resetRevision">reset_revision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_revision` <a name="reset_revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation">sync_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplateInput">application_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate">application_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sync_operation`<sup>Required</sup> <a name="sync_operation" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation"></a>

```python
sync_operation: str
```

- *Type:* str

---

##### `application_template_input`<sup>Optional</sup> <a name="application_template_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplateInput"></a>

```python
application_template_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `application_template`<sup>Required</sup> <a name="application_template" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate"></a>

```python
application_template: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

---


### SaasRuntimeUnitKindApplicationTemplateComponentOutputReference <a name="SaasRuntimeUnitKindApplicationTemplateComponentOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef">put_composite_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetComponent">reset_component</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetCompositeRef">reset_composite_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetRevision">reset_revision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_composite_ref` <a name="put_composite_ref" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef"></a>

```python
def put_composite_ref(
  application_template: str,
  revision: str = None
) -> None
```

###### `application_template`<sup>Required</sup> <a name="application_template" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef.parameter.applicationTemplate"></a>

- *Type:* str

Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template SaasRuntimeUnitKind#application_template}

---

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef.parameter.revision"></a>

- *Type:* str

Revision of the ApplicationTemplate, as a full resource name prefixed by 'application_template'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}

---

##### `reset_component` <a name="reset_component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetComponent"></a>

```python
def reset_component() -> None
```

##### `reset_composite_ref` <a name="reset_composite_ref" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetCompositeRef"></a>

```python
def reset_composite_ref() -> None
```

##### `reset_revision` <a name="reset_revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRef">composite_ref</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.componentInput">component_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRefInput">composite_ref_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `composite_ref`<sup>Required</sup> <a name="composite_ref" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRef"></a>

```python
composite_ref: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference</a>

---

##### `component_input`<sup>Optional</sup> <a name="component_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.componentInput"></a>

```python
component_input: str
```

- *Type:* str

---

##### `composite_ref_input`<sup>Optional</sup> <a name="composite_ref_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRefInput"></a>

```python
composite_ref_input: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitKindApplicationTemplateComponent
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

---


### SaasRuntimeUnitKindAppParamsOutputReference <a name="SaasRuntimeUnitKindAppParamsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scope` <a name="put_scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope"></a>

```python
def put_scope(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope.parameter.type"></a>

- *Type:* str

Scope type. Possible values: TYPE_REGIONAL TYPE_GLOBAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#type SaasRuntimeUnitKind#type}

---

##### `reset_group` <a name="reset_group" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference">SaasRuntimeUnitKindAppParamsScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scopeInput">scope_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scope"></a>

```python
scope: SaasRuntimeUnitKindAppParamsScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference">SaasRuntimeUnitKindAppParamsScopeOutputReference</a>

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scopeInput"></a>

```python
scope_input: SaasRuntimeUnitKindAppParamsScope
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitKindAppParams
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

---


### SaasRuntimeUnitKindAppParamsScopeOutputReference <a name="SaasRuntimeUnitKindAppParamsScopeOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitKindAppParamsScope
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

---


### SaasRuntimeUnitKindDependenciesList <a name="SaasRuntimeUnitKindDependenciesList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeUnitKindDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SaasRuntimeUnitKindDependencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>]

---


### SaasRuntimeUnitKindDependenciesOutputReference <a name="SaasRuntimeUnitKindDependenciesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput">unit_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKind">unit_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `unit_kind_input`<sup>Optional</sup> <a name="unit_kind_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput"></a>

```python
unit_kind_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `unit_kind`<sup>Required</sup> <a name="unit_kind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKind"></a>

```python
unit_kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeUnitKindDependencies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>

---


### SaasRuntimeUnitKindInputVariableMappingsFromOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsFromOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput">dependency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput">output_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable">output_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_input`<sup>Optional</sup> <a name="dependency_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```python
dependency_input: str
```

- *Type:* str

---

##### `output_variable_input`<sup>Optional</sup> <a name="output_variable_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```python
output_variable_input: str
```

- *Type:* str

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

---

##### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable"></a>

```python
output_variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

---


### SaasRuntimeUnitKindInputVariableMappingsList <a name="SaasRuntimeUnitKindInputVariableMappingsList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeUnitKindInputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SaasRuntimeUnitKindInputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>]

---


### SaasRuntimeUnitKindInputVariableMappingsOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom">put_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo">put_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_from` <a name="put_from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom"></a>

```python
def put_from(
  dependency: str,
  output_variable: str
) -> None
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom.parameter.dependency"></a>

- *Type:* str

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

###### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom.parameter.outputVariable"></a>

- *Type:* str

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}

---

##### `put_to` <a name="put_to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo"></a>

```python
def put_to(
  dependency: str,
  input_variable: str,
  ignore_for_lookup: bool | IResolvable = None
) -> None
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.dependency"></a>

- *Type:* str

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

###### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.inputVariable"></a>

- *Type:* str

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}

---

###### `ignore_for_lookup`<sup>Optional</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.ignoreForLookup"></a>

- *Type:* bool | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}

---

##### `reset_from` <a name="reset_from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference">SaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference">SaasRuntimeUnitKindInputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput">from_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput">to_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput">variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from"></a>

```python
from: SaasRuntimeUnitKindInputVariableMappingsFromOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference">SaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to"></a>

```python
to: SaasRuntimeUnitKindInputVariableMappingsToOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference">SaasRuntimeUnitKindInputVariableMappingsToOutputReference</a>

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput"></a>

```python
from_input: SaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput"></a>

```python
to_input: SaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput"></a>

```python
variable_input: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeUnitKindInputVariableMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>

---


### SaasRuntimeUnitKindInputVariableMappingsToOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsToOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup">reset_ignore_for_lookup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_for_lookup` <a name="reset_ignore_for_lookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```python
def reset_ignore_for_lookup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput">dependency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignore_for_lookup_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput">input_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup">ignore_for_lookup</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable">input_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_input`<sup>Optional</sup> <a name="dependency_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput"></a>

```python
dependency_input: str
```

- *Type:* str

---

##### `ignore_for_lookup_input`<sup>Optional</sup> <a name="ignore_for_lookup_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```python
ignore_for_lookup_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_variable_input`<sup>Optional</sup> <a name="input_variable_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```python
input_variable_input: str
```

- *Type:* str

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

---

##### `ignore_for_lookup`<sup>Required</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```python
ignore_for_lookup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable"></a>

```python
input_variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

---


### SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput">dependency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput">output_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable">output_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_input`<sup>Optional</sup> <a name="dependency_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```python
dependency_input: str
```

- *Type:* str

---

##### `output_variable_input`<sup>Optional</sup> <a name="output_variable_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```python
output_variable_input: str
```

- *Type:* str

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

---

##### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable"></a>

```python
output_variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---


### SaasRuntimeUnitKindOutputVariableMappingsList <a name="SaasRuntimeUnitKindOutputVariableMappingsList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeUnitKindOutputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SaasRuntimeUnitKindOutputVariableMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>]

---


### SaasRuntimeUnitKindOutputVariableMappingsOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom">put_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo">put_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_from` <a name="put_from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom"></a>

```python
def put_from(
  dependency: str,
  output_variable: str
) -> None
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom.parameter.dependency"></a>

- *Type:* str

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

###### `output_variable`<sup>Required</sup> <a name="output_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom.parameter.outputVariable"></a>

- *Type:* str

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}

---

##### `put_to` <a name="put_to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo"></a>

```python
def put_to(
  dependency: str,
  input_variable: str,
  ignore_for_lookup: bool | IResolvable = None
) -> None
```

###### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.dependency"></a>

- *Type:* str

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

###### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.inputVariable"></a>

- *Type:* str

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}

---

###### `ignore_for_lookup`<sup>Optional</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.ignoreForLookup"></a>

- *Type:* bool | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}

---

##### `reset_from` <a name="reset_from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference">SaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput">from_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput">to_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput">variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from"></a>

```python
from: SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to"></a>

```python
to: SaasRuntimeUnitKindOutputVariableMappingsToOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference">SaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a>

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput"></a>

```python
from_input: SaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput"></a>

```python
to_input: SaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput"></a>

```python
variable_input: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeUnitKindOutputVariableMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>

---


### SaasRuntimeUnitKindOutputVariableMappingsToOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsToOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup">reset_ignore_for_lookup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_for_lookup` <a name="reset_ignore_for_lookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```python
def reset_ignore_for_lookup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput">dependency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignore_for_lookup_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput">input_variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup">ignore_for_lookup</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable">input_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_input`<sup>Optional</sup> <a name="dependency_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput"></a>

```python
dependency_input: str
```

- *Type:* str

---

##### `ignore_for_lookup_input`<sup>Optional</sup> <a name="ignore_for_lookup_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```python
ignore_for_lookup_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_variable_input`<sup>Optional</sup> <a name="input_variable_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```python
input_variable_input: str
```

- *Type:* str

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

---

##### `ignore_for_lookup`<sup>Required</sup> <a name="ignore_for_lookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```python
ignore_for_lookup: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_variable`<sup>Required</sup> <a name="input_variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable"></a>

```python
input_variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

---


### SaasRuntimeUnitKindTimeoutsOutputReference <a name="SaasRuntimeUnitKindTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_unit_kind

saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeUnitKindTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

---



