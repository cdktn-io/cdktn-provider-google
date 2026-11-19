# `saasRuntimeSaas` Submodule <a name="`saasRuntimeSaas` Submodule" id="@cdktn/provider-google.saasRuntimeSaas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeSaas <a name="SaasRuntimeSaas" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas google_saas_runtime_saas}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaas(
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
  saas_id: str,
  annotations: typing.Mapping[str] = None,
  application_template: SaasRuntimeSaasApplicationTemplate = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  locations: IResolvable | typing.List[SaasRuntimeSaasLocations] = None,
  project: str = None,
  timeouts: SaasRuntimeSaasTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.saasId">saas_id</a></code> | <code>str</code> | The ID value for the new saas. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.applicationTemplate">application_template</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate">SaasRuntimeSaasApplicationTemplate</a></code> | application_template block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#id SaasRuntimeSaas#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.locations">locations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations">SaasRuntimeSaasLocations</a>]</code> | locations block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#project SaasRuntimeSaas#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts">SaasRuntimeSaasTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#location SaasRuntimeSaas#location}

---

##### `saas_id`<sup>Required</sup> <a name="saas_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.saasId"></a>

- *Type:* str

The ID value for the new saas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#saas_id SaasRuntimeSaas#saas_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#annotations SaasRuntimeSaas#annotations}

---

##### `application_template`<sup>Optional</sup> <a name="application_template" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.applicationTemplate"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate">SaasRuntimeSaasApplicationTemplate</a>

application_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#application_template SaasRuntimeSaas#application_template}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#deletion_policy SaasRuntimeSaas#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#id SaasRuntimeSaas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#labels SaasRuntimeSaas#labels}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.locations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations">SaasRuntimeSaasLocations</a>]

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#locations SaasRuntimeSaas#locations}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#project SaasRuntimeSaas#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts">SaasRuntimeSaasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#timeouts SaasRuntimeSaas#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putApplicationTemplate">put_application_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putLocations">put_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetApplicationTemplate">reset_application_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetLocations">reset_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_template` <a name="put_application_template" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putApplicationTemplate"></a>

```python
def put_application_template(
  application_template: str,
  revision: str = None
) -> None
```

###### `application_template`<sup>Required</sup> <a name="application_template" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putApplicationTemplate.parameter.applicationTemplate"></a>

- *Type:* str

Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#application_template SaasRuntimeSaas#application_template}

---

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putApplicationTemplate.parameter.revision"></a>

- *Type:* str

Revision of the ApplicationTemplate to import, as a full resource name prefixed by 'application_template': 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}/revisions/{revision}'.

Changes to the revision trigger a new import. If empty, the service
stores 'application_template' but doesn't import it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#revision SaasRuntimeSaas#revision}

---

##### `put_locations` <a name="put_locations" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putLocations"></a>

```python
def put_locations(
  value: IResolvable | typing.List[SaasRuntimeSaasLocations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putLocations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations">SaasRuntimeSaasLocations</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#create SaasRuntimeSaas#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#delete SaasRuntimeSaas#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#update SaasRuntimeSaas#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_application_template` <a name="reset_application_template" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetApplicationTemplate"></a>

```python
def reset_application_template() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_locations` <a name="reset_locations" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetLocations"></a>

```python
def reset_locations() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SaasRuntimeSaas resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.isConstruct"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaas.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.isTerraformElement"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaas.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.isTerraformResource"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaas.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.generateConfigForImport"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaas.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SaasRuntimeSaas resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SaasRuntimeSaas to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SaasRuntimeSaas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeSaas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.applicationTemplate">application_template</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference">SaasRuntimeSaasApplicationTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.blueprintRepo">blueprint_repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList">SaasRuntimeSaasConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList">SaasRuntimeSaasErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.locations">locations</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList">SaasRuntimeSaasLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference">SaasRuntimeSaasTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.applicationTemplateInput">application_template_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate">SaasRuntimeSaasApplicationTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.locationsInput">locations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations">SaasRuntimeSaasLocations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.saasIdInput">saas_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts">SaasRuntimeSaasTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.saasId">saas_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_template`<sup>Required</sup> <a name="application_template" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.applicationTemplate"></a>

```python
application_template: SaasRuntimeSaasApplicationTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference">SaasRuntimeSaasApplicationTemplateOutputReference</a>

---

##### `blueprint_repo`<sup>Required</sup> <a name="blueprint_repo" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.blueprintRepo"></a>

```python
blueprint_repo: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.conditions"></a>

```python
conditions: SaasRuntimeSaasConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList">SaasRuntimeSaasConditionsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.error"></a>

```python
error: SaasRuntimeSaasErrorList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList">SaasRuntimeSaasErrorList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.locations"></a>

```python
locations: SaasRuntimeSaasLocationsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList">SaasRuntimeSaasLocationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.timeouts"></a>

```python
timeouts: SaasRuntimeSaasTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference">SaasRuntimeSaasTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application_template_input`<sup>Optional</sup> <a name="application_template_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.applicationTemplateInput"></a>

```python
application_template_input: SaasRuntimeSaasApplicationTemplate
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate">SaasRuntimeSaasApplicationTemplate</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.locationsInput"></a>

```python
locations_input: IResolvable | typing.List[SaasRuntimeSaasLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations">SaasRuntimeSaasLocations</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `saas_id_input`<sup>Optional</sup> <a name="saas_id_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.saasIdInput"></a>

```python
saas_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SaasRuntimeSaasTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts">SaasRuntimeSaasTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `saas_id`<sup>Required</sup> <a name="saas_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.saasId"></a>

```python
saas_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaas.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeSaasApplicationTemplate <a name="SaasRuntimeSaasApplicationTemplate" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate(
  application_template: str,
  revision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate.property.applicationTemplate">application_template</a></code> | <code>str</code> | Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate.property.revision">revision</a></code> | <code>str</code> | Revision of the ApplicationTemplate to import, as a full resource name prefixed by 'application_template': 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}/revisions/{revision}'. |

---

##### `application_template`<sup>Required</sup> <a name="application_template" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate.property.applicationTemplate"></a>

```python
application_template: str
```

- *Type:* str

Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#application_template SaasRuntimeSaas#application_template}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate.property.revision"></a>

```python
revision: str
```

- *Type:* str

Revision of the ApplicationTemplate to import, as a full resource name prefixed by 'application_template': 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}/revisions/{revision}'.

Changes to the revision trigger a new import. If empty, the service
stores 'application_template' but doesn't import it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#revision SaasRuntimeSaas#revision}

---

### SaasRuntimeSaasConditions <a name="SaasRuntimeSaasConditions" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditions.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasConditions()
```


### SaasRuntimeSaasConfig <a name="SaasRuntimeSaasConfig" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  saas_id: str,
  annotations: typing.Mapping[str] = None,
  application_template: SaasRuntimeSaasApplicationTemplate = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  locations: IResolvable | typing.List[SaasRuntimeSaasLocations] = None,
  project: str = None,
  timeouts: SaasRuntimeSaasTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.saasId">saas_id</a></code> | <code>str</code> | The ID value for the new saas. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.applicationTemplate">application_template</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate">SaasRuntimeSaasApplicationTemplate</a></code> | application_template block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#id SaasRuntimeSaas#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.locations">locations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations">SaasRuntimeSaasLocations</a>]</code> | locations block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#project SaasRuntimeSaas#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts">SaasRuntimeSaasTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#location SaasRuntimeSaas#location}

---

##### `saas_id`<sup>Required</sup> <a name="saas_id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.saasId"></a>

```python
saas_id: str
```

- *Type:* str

The ID value for the new saas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#saas_id SaasRuntimeSaas#saas_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#annotations SaasRuntimeSaas#annotations}

---

##### `application_template`<sup>Optional</sup> <a name="application_template" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.applicationTemplate"></a>

```python
application_template: SaasRuntimeSaasApplicationTemplate
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate">SaasRuntimeSaasApplicationTemplate</a>

application_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#application_template SaasRuntimeSaas#application_template}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#deletion_policy SaasRuntimeSaas#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#id SaasRuntimeSaas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#labels SaasRuntimeSaas#labels}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.locations"></a>

```python
locations: IResolvable | typing.List[SaasRuntimeSaasLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations">SaasRuntimeSaasLocations</a>]

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#locations SaasRuntimeSaas#locations}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#project SaasRuntimeSaas#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConfig.property.timeouts"></a>

```python
timeouts: SaasRuntimeSaasTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts">SaasRuntimeSaasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#timeouts SaasRuntimeSaas#timeouts}

---

### SaasRuntimeSaasError <a name="SaasRuntimeSaasError" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasError.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasError()
```


### SaasRuntimeSaasLocations <a name="SaasRuntimeSaasLocations" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasLocations(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations.property.name">name</a></code> | <code>str</code> | Name of location. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations.property.name"></a>

```python
name: str
```

- *Type:* str

Name of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#name SaasRuntimeSaas#name}

---

### SaasRuntimeSaasTimeouts <a name="SaasRuntimeSaasTimeouts" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#create SaasRuntimeSaas#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#delete SaasRuntimeSaas#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#update SaasRuntimeSaas#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#create SaasRuntimeSaas#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#delete SaasRuntimeSaas#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_saas#update SaasRuntimeSaas#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeSaasApplicationTemplateOutputReference <a name="SaasRuntimeSaasApplicationTemplateOutputReference" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.resetRevision">reset_revision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_revision` <a name="reset_revision" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.syncOperation">sync_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.applicationTemplateInput">application_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.applicationTemplate">application_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate">SaasRuntimeSaasApplicationTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sync_operation`<sup>Required</sup> <a name="sync_operation" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.syncOperation"></a>

```python
sync_operation: str
```

- *Type:* str

---

##### `application_template_input`<sup>Optional</sup> <a name="application_template_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.applicationTemplateInput"></a>

```python
application_template_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `application_template`<sup>Required</sup> <a name="application_template" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.applicationTemplate"></a>

```python
application_template: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplateOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeSaasApplicationTemplate
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasApplicationTemplate">SaasRuntimeSaasApplicationTemplate</a>

---


### SaasRuntimeSaasConditionsList <a name="SaasRuntimeSaasConditionsList" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeSaasConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeSaasConditionsOutputReference <a name="SaasRuntimeSaasConditionsOutputReference" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditions">SaasRuntimeSaasConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditionsOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeSaasConditions
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasConditions">SaasRuntimeSaasConditions</a>

---


### SaasRuntimeSaasErrorList <a name="SaasRuntimeSaasErrorList" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeSaasErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeSaasErrorOutputReference <a name="SaasRuntimeSaasErrorOutputReference" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasError">SaasRuntimeSaasError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasErrorOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeSaasError
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasError">SaasRuntimeSaasError</a>

---


### SaasRuntimeSaasLocationsList <a name="SaasRuntimeSaasLocationsList" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeSaasLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations">SaasRuntimeSaasLocations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SaasRuntimeSaasLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations">SaasRuntimeSaasLocations</a>]

---


### SaasRuntimeSaasLocationsOutputReference <a name="SaasRuntimeSaasLocationsOutputReference" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations">SaasRuntimeSaasLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeSaasLocations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasLocations">SaasRuntimeSaasLocations</a>

---


### SaasRuntimeSaasTimeoutsOutputReference <a name="SaasRuntimeSaasTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_saas

saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts">SaasRuntimeSaasTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeSaasTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeSaas.SaasRuntimeSaasTimeouts">SaasRuntimeSaasTimeouts</a>

---



