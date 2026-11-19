# `saasRuntimeRelease` Submodule <a name="`saasRuntimeRelease` Submodule" id="@cdktn/provider-google.saasRuntimeRelease"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeRelease <a name="SaasRuntimeRelease" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release google_saas_runtime_release}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeRelease(
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
  release_id: str,
  unit_kind: str,
  annotations: typing.Mapping[str] = None,
  blueprint: SaasRuntimeReleaseBlueprint = None,
  deletion_policy: str = None,
  id: str = None,
  input_variable_defaults: IResolvable | typing.List[SaasRuntimeReleaseInputVariableDefaults] = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  release_requirements: SaasRuntimeReleaseReleaseRequirements = None,
  timeouts: SaasRuntimeReleaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.releaseId">release_id</a></code> | <code>str</code> | The ID value for the new release. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.unitKind">unit_kind</a></code> | <code>str</code> | Reference to the UnitKind this Release corresponds to (required and immutable once created). |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.blueprint">blueprint</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a></code> | blueprint block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#id SaasRuntimeRelease#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.inputVariableDefaults">input_variable_defaults</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>]</code> | input_variable_defaults block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#project SaasRuntimeRelease#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.releaseRequirements">release_requirements</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a></code> | release_requirements block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#location SaasRuntimeRelease#location}

---

##### `release_id`<sup>Required</sup> <a name="release_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.releaseId"></a>

- *Type:* str

The ID value for the new release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#release_id SaasRuntimeRelease#release_id}

---

##### `unit_kind`<sup>Required</sup> <a name="unit_kind" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.unitKind"></a>

- *Type:* str

Reference to the UnitKind this Release corresponds to (required and immutable once created).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#unit_kind SaasRuntimeRelease#unit_kind}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#annotations SaasRuntimeRelease#annotations}

---

##### `blueprint`<sup>Optional</sup> <a name="blueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.blueprint"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#blueprint SaasRuntimeRelease#blueprint}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#deletion_policy SaasRuntimeRelease#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#id SaasRuntimeRelease#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_variable_defaults`<sup>Optional</sup> <a name="input_variable_defaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.inputVariableDefaults"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>]

input_variable_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#input_variable_defaults SaasRuntimeRelease#input_variable_defaults}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#labels SaasRuntimeRelease#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#project SaasRuntimeRelease#project}.

---

##### `release_requirements`<sup>Optional</sup> <a name="release_requirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.releaseRequirements"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

release_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#release_requirements SaasRuntimeRelease#release_requirements}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#timeouts SaasRuntimeRelease#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putBlueprint">put_blueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putInputVariableDefaults">put_input_variable_defaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putReleaseRequirements">put_release_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetBlueprint">reset_blueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetInputVariableDefaults">reset_input_variable_defaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetReleaseRequirements">reset_release_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_blueprint` <a name="put_blueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putBlueprint"></a>

```python
def put_blueprint(
  package: str = None
) -> None
```

###### `package`<sup>Optional</sup> <a name="package" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putBlueprint.parameter.package"></a>

- *Type:* str

URI to a blueprint used by the Unit (required unless unitKind or release is set).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#package SaasRuntimeRelease#package}

---

##### `put_input_variable_defaults` <a name="put_input_variable_defaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putInputVariableDefaults"></a>

```python
def put_input_variable_defaults(
  value: IResolvable | typing.List[SaasRuntimeReleaseInputVariableDefaults]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putInputVariableDefaults.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>]

---

##### `put_release_requirements` <a name="put_release_requirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putReleaseRequirements"></a>

```python
def put_release_requirements(
  upgradeable_from_releases: typing.List[str] = None
) -> None
```

###### `upgradeable_from_releases`<sup>Optional</sup> <a name="upgradeable_from_releases" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putReleaseRequirements.parameter.upgradeableFromReleases"></a>

- *Type:* typing.List[str]

A list of releases from which a unit can be upgraded to this one (optional).

If left empty no constraints will be applied. When provided,
unit upgrade requests to this release will check and enforce this
constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#upgradeable_from_releases SaasRuntimeRelease#upgradeable_from_releases}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#create SaasRuntimeRelease#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#delete SaasRuntimeRelease#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#update SaasRuntimeRelease#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_blueprint` <a name="reset_blueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetBlueprint"></a>

```python
def reset_blueprint() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_variable_defaults` <a name="reset_input_variable_defaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetInputVariableDefaults"></a>

```python
def reset_input_variable_defaults() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_release_requirements` <a name="reset_release_requirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetReleaseRequirements"></a>

```python
def reset_release_requirements() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SaasRuntimeRelease resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isConstruct"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeRelease.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformElement"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeRelease.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformResource"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeRelease.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeRelease.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SaasRuntimeRelease resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SaasRuntimeRelease to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SaasRuntimeRelease that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeRelease to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.applicationTemplateComponent">application_template_component</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList">SaasRuntimeReleaseApplicationTemplateComponentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprint">blueprint</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference">SaasRuntimeReleaseBlueprintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaults">input_variable_defaults</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList">SaasRuntimeReleaseInputVariableDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariables">input_variables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList">SaasRuntimeReleaseInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.outputVariables">output_variables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList">SaasRuntimeReleaseOutputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirements">release_requirements</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference">SaasRuntimeReleaseReleaseRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference">SaasRuntimeReleaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprintInput">blueprint_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaultsInput">input_variable_defaults_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseIdInput">release_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirementsInput">release_requirements_input</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKindInput">unit_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseId">release_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKind">unit_kind</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_template_component`<sup>Required</sup> <a name="application_template_component" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.applicationTemplateComponent"></a>

```python
application_template_component: SaasRuntimeReleaseApplicationTemplateComponentList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList">SaasRuntimeReleaseApplicationTemplateComponentList</a>

---

##### `blueprint`<sup>Required</sup> <a name="blueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprint"></a>

```python
blueprint: SaasRuntimeReleaseBlueprintOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference">SaasRuntimeReleaseBlueprintOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `input_variable_defaults`<sup>Required</sup> <a name="input_variable_defaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaults"></a>

```python
input_variable_defaults: SaasRuntimeReleaseInputVariableDefaultsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList">SaasRuntimeReleaseInputVariableDefaultsList</a>

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariables"></a>

```python
input_variables: SaasRuntimeReleaseInputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList">SaasRuntimeReleaseInputVariablesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_variables`<sup>Required</sup> <a name="output_variables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.outputVariables"></a>

```python
output_variables: SaasRuntimeReleaseOutputVariablesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList">SaasRuntimeReleaseOutputVariablesList</a>

---

##### `release_requirements`<sup>Required</sup> <a name="release_requirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirements"></a>

```python
release_requirements: SaasRuntimeReleaseReleaseRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference">SaasRuntimeReleaseReleaseRequirementsOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeouts"></a>

```python
timeouts: SaasRuntimeReleaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference">SaasRuntimeReleaseTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `blueprint_input`<sup>Optional</sup> <a name="blueprint_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.blueprintInput"></a>

```python
blueprint_input: SaasRuntimeReleaseBlueprint
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_variable_defaults_input`<sup>Optional</sup> <a name="input_variable_defaults_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.inputVariableDefaultsInput"></a>

```python
input_variable_defaults_input: IResolvable | typing.List[SaasRuntimeReleaseInputVariableDefaults]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `release_id_input`<sup>Optional</sup> <a name="release_id_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseIdInput"></a>

```python
release_id_input: str
```

- *Type:* str

---

##### `release_requirements_input`<sup>Optional</sup> <a name="release_requirements_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseRequirementsInput"></a>

```python
release_requirements_input: SaasRuntimeReleaseReleaseRequirements
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SaasRuntimeReleaseTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

---

##### `unit_kind_input`<sup>Optional</sup> <a name="unit_kind_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKindInput"></a>

```python
unit_kind_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `release_id`<sup>Required</sup> <a name="release_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.releaseId"></a>

```python
release_id: str
```

- *Type:* str

---

##### `unit_kind`<sup>Required</sup> <a name="unit_kind" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.unitKind"></a>

```python
unit_kind: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeRelease.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeReleaseApplicationTemplateComponent <a name="SaasRuntimeReleaseApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent()
```


### SaasRuntimeReleaseApplicationTemplateComponentCompositeRef <a name="SaasRuntimeReleaseApplicationTemplateComponentCompositeRef" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef()
```


### SaasRuntimeReleaseBlueprint <a name="SaasRuntimeReleaseBlueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseBlueprint(
  package: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint.property.package">package</a></code> | <code>str</code> | URI to a blueprint used by the Unit (required unless unitKind or release is set). |

---

##### `package`<sup>Optional</sup> <a name="package" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint.property.package"></a>

```python
package: str
```

- *Type:* str

URI to a blueprint used by the Unit (required unless unitKind or release is set).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#package SaasRuntimeRelease#package}

---

### SaasRuntimeReleaseConfig <a name="SaasRuntimeReleaseConfig" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  release_id: str,
  unit_kind: str,
  annotations: typing.Mapping[str] = None,
  blueprint: SaasRuntimeReleaseBlueprint = None,
  deletion_policy: str = None,
  id: str = None,
  input_variable_defaults: IResolvable | typing.List[SaasRuntimeReleaseInputVariableDefaults] = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  release_requirements: SaasRuntimeReleaseReleaseRequirements = None,
  timeouts: SaasRuntimeReleaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseId">release_id</a></code> | <code>str</code> | The ID value for the new release. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.unitKind">unit_kind</a></code> | <code>str</code> | Reference to the UnitKind this Release corresponds to (required and immutable once created). |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.blueprint">blueprint</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a></code> | blueprint block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#id SaasRuntimeRelease#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.inputVariableDefaults">input_variable_defaults</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>]</code> | input_variable_defaults block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#project SaasRuntimeRelease#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseRequirements">release_requirements</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a></code> | release_requirements block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#location SaasRuntimeRelease#location}

---

##### `release_id`<sup>Required</sup> <a name="release_id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseId"></a>

```python
release_id: str
```

- *Type:* str

The ID value for the new release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#release_id SaasRuntimeRelease#release_id}

---

##### `unit_kind`<sup>Required</sup> <a name="unit_kind" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.unitKind"></a>

```python
unit_kind: str
```

- *Type:* str

Reference to the UnitKind this Release corresponds to (required and immutable once created).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#unit_kind SaasRuntimeRelease#unit_kind}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#annotations SaasRuntimeRelease#annotations}

---

##### `blueprint`<sup>Optional</sup> <a name="blueprint" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.blueprint"></a>

```python
blueprint: SaasRuntimeReleaseBlueprint
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#blueprint SaasRuntimeRelease#blueprint}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#deletion_policy SaasRuntimeRelease#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#id SaasRuntimeRelease#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_variable_defaults`<sup>Optional</sup> <a name="input_variable_defaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.inputVariableDefaults"></a>

```python
input_variable_defaults: IResolvable | typing.List[SaasRuntimeReleaseInputVariableDefaults]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>]

input_variable_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#input_variable_defaults SaasRuntimeRelease#input_variable_defaults}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#labels SaasRuntimeRelease#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#project SaasRuntimeRelease#project}.

---

##### `release_requirements`<sup>Optional</sup> <a name="release_requirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.releaseRequirements"></a>

```python
release_requirements: SaasRuntimeReleaseReleaseRequirements
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

release_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#release_requirements SaasRuntimeRelease#release_requirements}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseConfig.property.timeouts"></a>

```python
timeouts: SaasRuntimeReleaseTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#timeouts SaasRuntimeRelease#timeouts}

---

### SaasRuntimeReleaseInputVariableDefaults <a name="SaasRuntimeReleaseInputVariableDefaults" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults(
  variable: str,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.variable">variable</a></code> | <code>str</code> | Name of the variable from actuation configs. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.type">type</a></code> | <code>str</code> | Name of a supported variable type. Supported types are STRING, INT, BOOL. Possible values: ["TYPE_UNSPECIFIED", "STRING", "INT", "BOOL"]. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.value">value</a></code> | <code>str</code> | String encoded value for the variable. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.variable"></a>

```python
variable: str
```

- *Type:* str

Name of the variable from actuation configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#variable SaasRuntimeRelease#variable}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.type"></a>

```python
type: str
```

- *Type:* str

Name of a supported variable type. Supported types are STRING, INT, BOOL. Possible values: ["TYPE_UNSPECIFIED", "STRING", "INT", "BOOL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#type SaasRuntimeRelease#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults.property.value"></a>

```python
value: str
```

- *Type:* str

String encoded value for the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#value SaasRuntimeRelease#value}

---

### SaasRuntimeReleaseInputVariables <a name="SaasRuntimeReleaseInputVariables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseInputVariables()
```


### SaasRuntimeReleaseOutputVariables <a name="SaasRuntimeReleaseOutputVariables" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseOutputVariables()
```


### SaasRuntimeReleaseReleaseRequirements <a name="SaasRuntimeReleaseReleaseRequirements" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements(
  upgradeable_from_releases: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements.property.upgradeableFromReleases">upgradeable_from_releases</a></code> | <code>typing.List[str]</code> | A list of releases from which a unit can be upgraded to this one (optional). |

---

##### `upgradeable_from_releases`<sup>Optional</sup> <a name="upgradeable_from_releases" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements.property.upgradeableFromReleases"></a>

```python
upgradeable_from_releases: typing.List[str]
```

- *Type:* typing.List[str]

A list of releases from which a unit can be upgraded to this one (optional).

If left empty no constraints will be applied. When provided,
unit upgrade requests to this release will check and enforce this
constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#upgradeable_from_releases SaasRuntimeRelease#upgradeable_from_releases}

---

### SaasRuntimeReleaseTimeouts <a name="SaasRuntimeReleaseTimeouts" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#create SaasRuntimeRelease#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#delete SaasRuntimeRelease#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#update SaasRuntimeRelease#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#create SaasRuntimeRelease#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#delete SaasRuntimeRelease#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_release#update SaasRuntimeRelease#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList <a name="SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference <a name="SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate">application_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation">sync_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef">SaasRuntimeReleaseApplicationTemplateComponentCompositeRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_template`<sup>Required</sup> <a name="application_template" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate"></a>

```python
application_template: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `sync_operation`<sup>Required</sup> <a name="sync_operation" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation"></a>

```python
sync_operation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeReleaseApplicationTemplateComponentCompositeRef
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRef">SaasRuntimeReleaseApplicationTemplateComponentCompositeRef</a>

---


### SaasRuntimeReleaseApplicationTemplateComponentList <a name="SaasRuntimeReleaseApplicationTemplateComponentList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeReleaseApplicationTemplateComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeReleaseApplicationTemplateComponentOutputReference <a name="SaasRuntimeReleaseApplicationTemplateComponentOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.compositeRef">composite_ref</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList">SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent">SaasRuntimeReleaseApplicationTemplateComponent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `composite_ref`<sup>Required</sup> <a name="composite_ref" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.compositeRef"></a>

```python
composite_ref: SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList">SaasRuntimeReleaseApplicationTemplateComponentCompositeRefList</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponentOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeReleaseApplicationTemplateComponent
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseApplicationTemplateComponent">SaasRuntimeReleaseApplicationTemplateComponent</a>

---


### SaasRuntimeReleaseBlueprintOutputReference <a name="SaasRuntimeReleaseBlueprintOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resetPackage">reset_package</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_package` <a name="reset_package" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.resetPackage"></a>

```python
def reset_package() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.packageInput">package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.package">package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `package_input`<sup>Optional</sup> <a name="package_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.packageInput"></a>

```python
package_input: str
```

- *Type:* str

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.package"></a>

```python
package: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprintOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeReleaseBlueprint
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseBlueprint">SaasRuntimeReleaseBlueprint</a>

---


### SaasRuntimeReleaseInputVariableDefaultsList <a name="SaasRuntimeReleaseInputVariableDefaultsList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeReleaseInputVariableDefaultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SaasRuntimeReleaseInputVariableDefaults]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>]

---


### SaasRuntimeReleaseInputVariableDefaultsOutputReference <a name="SaasRuntimeReleaseInputVariableDefaultsOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variableInput">variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variableInput"></a>

```python
variable_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaultsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeReleaseInputVariableDefaults
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariableDefaults">SaasRuntimeReleaseInputVariableDefaults</a>

---


### SaasRuntimeReleaseInputVariablesList <a name="SaasRuntimeReleaseInputVariablesList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeReleaseInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeReleaseInputVariablesOutputReference <a name="SaasRuntimeReleaseInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables">SaasRuntimeReleaseInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeReleaseInputVariables
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseInputVariables">SaasRuntimeReleaseInputVariables</a>

---


### SaasRuntimeReleaseOutputVariablesList <a name="SaasRuntimeReleaseOutputVariablesList" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SaasRuntimeReleaseOutputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SaasRuntimeReleaseOutputVariablesOutputReference <a name="SaasRuntimeReleaseOutputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables">SaasRuntimeReleaseOutputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeReleaseOutputVariables
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseOutputVariables">SaasRuntimeReleaseOutputVariables</a>

---


### SaasRuntimeReleaseReleaseRequirementsOutputReference <a name="SaasRuntimeReleaseReleaseRequirementsOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resetUpgradeableFromReleases">reset_upgradeable_from_releases</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_upgradeable_from_releases` <a name="reset_upgradeable_from_releases" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.resetUpgradeableFromReleases"></a>

```python
def reset_upgradeable_from_releases() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleasesInput">upgradeable_from_releases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleases">upgradeable_from_releases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `upgradeable_from_releases_input`<sup>Optional</sup> <a name="upgradeable_from_releases_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleasesInput"></a>

```python
upgradeable_from_releases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `upgradeable_from_releases`<sup>Required</sup> <a name="upgradeable_from_releases" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.upgradeableFromReleases"></a>

```python
upgradeable_from_releases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: SaasRuntimeReleaseReleaseRequirements
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseReleaseRequirements">SaasRuntimeReleaseReleaseRequirements</a>

---


### SaasRuntimeReleaseTimeoutsOutputReference <a name="SaasRuntimeReleaseTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import saas_runtime_release

saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SaasRuntimeReleaseTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRelease.SaasRuntimeReleaseTimeouts">SaasRuntimeReleaseTimeouts</a>

---



