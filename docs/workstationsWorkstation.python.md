# `workstationsWorkstation` Submodule <a name="`workstationsWorkstation` Submodule" id="@cdktn/provider-google.workstationsWorkstation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkstationsWorkstation <a name="WorkstationsWorkstation" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation google_workstations_workstation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation

workstationsWorkstation.WorkstationsWorkstation(
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
  workstation_cluster_id: str,
  workstation_config_id: str,
  workstation_id: str,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  env: typing.Mapping[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  source_workstation: str = None,
  timeouts: WorkstationsWorkstationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the workstation parent resources reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.workstationConfigId">workstation_config_id</a></code> | <code>str</code> | The ID of the parent workstation cluster config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.workstationId">workstation_id</a></code> | <code>str</code> | ID to use for the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.env">env</a></code> | <code>typing.Mapping[str]</code> | 'Client-specified environment variables passed to the workstation container's entrypoint.'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#id WorkstationsWorkstation#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#project WorkstationsWorkstation#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.sourceWorkstation">source_workstation</a></code> | <code>str</code> | Full resource name of the source workstation from which the workstation's persistent directories will be cloned from during creation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts">WorkstationsWorkstationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.location"></a>

- *Type:* str

The location where the workstation parent resources reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#location WorkstationsWorkstation#location}

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.workstationClusterId"></a>

- *Type:* str

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#workstation_cluster_id WorkstationsWorkstation#workstation_cluster_id}

---

##### `workstation_config_id`<sup>Required</sup> <a name="workstation_config_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.workstationConfigId"></a>

- *Type:* str

The ID of the parent workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#workstation_config_id WorkstationsWorkstation#workstation_config_id}

---

##### `workstation_id`<sup>Required</sup> <a name="workstation_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.workstationId"></a>

- *Type:* str

ID to use for the workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#workstation_id WorkstationsWorkstation#workstation_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#annotations WorkstationsWorkstation#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#display_name WorkstationsWorkstation#display_name}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.env"></a>

- *Type:* typing.Mapping[str]

'Client-specified environment variables passed to the workstation container's entrypoint.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#env WorkstationsWorkstation#env}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#id WorkstationsWorkstation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#labels WorkstationsWorkstation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#project WorkstationsWorkstation#project}.

---

##### `source_workstation`<sup>Optional</sup> <a name="source_workstation" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.sourceWorkstation"></a>

- *Type:* str

Full resource name of the source workstation from which the workstation's persistent directories will be cloned from during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#source_workstation WorkstationsWorkstation#source_workstation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts">WorkstationsWorkstationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#timeouts WorkstationsWorkstation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetSourceWorkstation">reset_source_workstation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#create WorkstationsWorkstation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#delete WorkstationsWorkstation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#update WorkstationsWorkstation#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_source_workstation` <a name="reset_source_workstation" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetSourceWorkstation"></a>

```python
def reset_source_workstation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkstationsWorkstation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.isConstruct"></a>

```python
from cdktn_provider_google import workstations_workstation

workstationsWorkstation.WorkstationsWorkstation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.isTerraformElement"></a>

```python
from cdktn_provider_google import workstations_workstation

workstationsWorkstation.WorkstationsWorkstation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.isTerraformResource"></a>

```python
from cdktn_provider_google import workstations_workstation

workstationsWorkstation.WorkstationsWorkstation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.generateConfigForImport"></a>

```python
from cdktn_provider_google import workstations_workstation

workstationsWorkstation.WorkstationsWorkstation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkstationsWorkstation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkstationsWorkstation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkstationsWorkstation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkstationsWorkstation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference">WorkstationsWorkstationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.envInput">env_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.sourceWorkstationInput">source_workstation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts">WorkstationsWorkstationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationClusterIdInput">workstation_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationConfigIdInput">workstation_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationIdInput">workstation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.env">env</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.sourceWorkstation">source_workstation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationConfigId">workstation_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationId">workstation_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.timeouts"></a>

```python
timeouts: WorkstationsWorkstationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference">WorkstationsWorkstationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.envInput"></a>

```python
env_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `source_workstation_input`<sup>Optional</sup> <a name="source_workstation_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.sourceWorkstationInput"></a>

```python
source_workstation_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | WorkstationsWorkstationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts">WorkstationsWorkstationTimeouts</a>

---

##### `workstation_cluster_id_input`<sup>Optional</sup> <a name="workstation_cluster_id_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationClusterIdInput"></a>

```python
workstation_cluster_id_input: str
```

- *Type:* str

---

##### `workstation_config_id_input`<sup>Optional</sup> <a name="workstation_config_id_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationConfigIdInput"></a>

```python
workstation_config_id_input: str
```

- *Type:* str

---

##### `workstation_id_input`<sup>Optional</sup> <a name="workstation_id_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationIdInput"></a>

```python
workstation_id_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `source_workstation`<sup>Required</sup> <a name="source_workstation" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.sourceWorkstation"></a>

```python
source_workstation: str
```

- *Type:* str

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationClusterId"></a>

```python
workstation_cluster_id: str
```

- *Type:* str

---

##### `workstation_config_id`<sup>Required</sup> <a name="workstation_config_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationConfigId"></a>

```python
workstation_config_id: str
```

- *Type:* str

---

##### `workstation_id`<sup>Required</sup> <a name="workstation_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.workstationId"></a>

```python
workstation_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkstationsWorkstationConfig <a name="WorkstationsWorkstationConfig" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation

workstationsWorkstation.WorkstationsWorkstationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  workstation_cluster_id: str,
  workstation_config_id: str,
  workstation_id: str,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  env: typing.Mapping[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  source_workstation: str = None,
  timeouts: WorkstationsWorkstationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.location">location</a></code> | <code>str</code> | The location where the workstation parent resources reside. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.workstationConfigId">workstation_config_id</a></code> | <code>str</code> | The ID of the parent workstation cluster config. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.workstationId">workstation_id</a></code> | <code>str</code> | ID to use for the workstation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name for this resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.env">env</a></code> | <code>typing.Mapping[str]</code> | 'Client-specified environment variables passed to the workstation container's entrypoint.'. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#id WorkstationsWorkstation#id}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#project WorkstationsWorkstation#project}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.sourceWorkstation">source_workstation</a></code> | <code>str</code> | Full resource name of the source workstation from which the workstation's persistent directories will be cloned from during creation. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts">WorkstationsWorkstationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the workstation parent resources reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#location WorkstationsWorkstation#location}

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.workstationClusterId"></a>

```python
workstation_cluster_id: str
```

- *Type:* str

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#workstation_cluster_id WorkstationsWorkstation#workstation_cluster_id}

---

##### `workstation_config_id`<sup>Required</sup> <a name="workstation_config_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.workstationConfigId"></a>

```python
workstation_config_id: str
```

- *Type:* str

The ID of the parent workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#workstation_config_id WorkstationsWorkstation#workstation_config_id}

---

##### `workstation_id`<sup>Required</sup> <a name="workstation_id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.workstationId"></a>

```python
workstation_id: str
```

- *Type:* str

ID to use for the workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#workstation_id WorkstationsWorkstation#workstation_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Client-specified annotations. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#annotations WorkstationsWorkstation#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#display_name WorkstationsWorkstation#display_name}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

'Client-specified environment variables passed to the workstation container's entrypoint.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#env WorkstationsWorkstation#env}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#id WorkstationsWorkstation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#labels WorkstationsWorkstation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#project WorkstationsWorkstation#project}.

---

##### `source_workstation`<sup>Optional</sup> <a name="source_workstation" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.sourceWorkstation"></a>

```python
source_workstation: str
```

- *Type:* str

Full resource name of the source workstation from which the workstation's persistent directories will be cloned from during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#source_workstation WorkstationsWorkstation#source_workstation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationConfig.property.timeouts"></a>

```python
timeouts: WorkstationsWorkstationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts">WorkstationsWorkstationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#timeouts WorkstationsWorkstation#timeouts}

---

### WorkstationsWorkstationTimeouts <a name="WorkstationsWorkstationTimeouts" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation

workstationsWorkstation.WorkstationsWorkstationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#create WorkstationsWorkstation#create}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#delete WorkstationsWorkstation#delete}. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#update WorkstationsWorkstation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#create WorkstationsWorkstation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#delete WorkstationsWorkstation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/workstations_workstation#update WorkstationsWorkstation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkstationsWorkstationTimeoutsOutputReference <a name="WorkstationsWorkstationTimeoutsOutputReference" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workstations_workstation

workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts">WorkstationsWorkstationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkstationsWorkstationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workstationsWorkstation.WorkstationsWorkstationTimeouts">WorkstationsWorkstationTimeouts</a>

---



