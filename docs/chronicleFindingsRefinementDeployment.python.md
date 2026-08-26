# `chronicleFindingsRefinementDeployment` Submodule <a name="`chronicleFindingsRefinementDeployment` Submodule" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleFindingsRefinementDeployment <a name="ChronicleFindingsRefinementDeployment" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment google_chronicle_findings_refinement_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer"></a>

```python
from cdktn_provider_google import chronicle_findings_refinement_deployment

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  findings_refinement: str,
  instance: str,
  location: str,
  archived: bool | IResolvable = None,
  detection_exclusion_application: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication = None,
  enabled: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: ChronicleFindingsRefinementDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.findingsRefinement">findings_refinement</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.archived">archived</a></code> | <code>bool \| cdktn.IResolvable</code> | The archive state of the findings refinement deployment. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.detectionExclusionApplication">detection_exclusion_application</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | detection_exclusion_application block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the findings refinement is currently deployed continuously against incoming findings. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `findings_refinement`<sup>Required</sup> <a name="findings_refinement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.findingsRefinement"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#findings_refinement ChronicleFindingsRefinementDeployment#findings_refinement}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.instance"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#instance ChronicleFindingsRefinementDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#location ChronicleFindingsRefinementDeployment#location}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.archived"></a>

- *Type:* bool | cdktn.IResolvable

The archive state of the findings refinement deployment.

Cannot be set to true unless enabled is set to false.
If currently set to true, enabled cannot be updated to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#archived ChronicleFindingsRefinementDeployment#archived}

---

##### `detection_exclusion_application`<sup>Optional</sup> <a name="detection_exclusion_application" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.detectionExclusionApplication"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

detection_exclusion_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#detection_exclusion_application ChronicleFindingsRefinementDeployment#detection_exclusion_application}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the findings refinement is currently deployed continuously against incoming findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#enabled ChronicleFindingsRefinementDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#timeouts ChronicleFindingsRefinementDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication">put_detection_exclusion_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetArchived">reset_archived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication">reset_detection_exclusion_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_detection_exclusion_application` <a name="put_detection_exclusion_application" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication"></a>

```python
def put_detection_exclusion_application(
  curated_rules: typing.List[str] = None,
  curated_rule_sets: typing.List[str] = None,
  rules: typing.List[str] = None
) -> None
```

###### `curated_rules`<sup>Optional</sup> <a name="curated_rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication.parameter.curatedRules"></a>

- *Type:* typing.List[str]

The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#curated_rules ChronicleFindingsRefinementDeployment#curated_rules}

---

###### `curated_rule_sets`<sup>Optional</sup> <a name="curated_rule_sets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication.parameter.curatedRuleSets"></a>

- *Type:* typing.List[str]

The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#curated_rule_sets ChronicleFindingsRefinementDeployment#curated_rule_sets}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putDetectionExclusionApplication.parameter.rules"></a>

- *Type:* typing.List[str]

The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#rules ChronicleFindingsRefinementDeployment#rules}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#create ChronicleFindingsRefinementDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#delete ChronicleFindingsRefinementDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#update ChronicleFindingsRefinementDeployment#update}.

---

##### `reset_archived` <a name="reset_archived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetArchived"></a>

```python
def reset_archived() -> None
```

##### `reset_detection_exclusion_application` <a name="reset_detection_exclusion_application" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication"></a>

```python
def reset_detection_exclusion_application() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct"></a>

```python
from cdktn_provider_google import chronicle_findings_refinement_deployment

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google import chronicle_findings_refinement_deployment

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google import chronicle_findings_refinement_deployment

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google import chronicle_findings_refinement_deployment

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChronicleFindingsRefinementDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChronicleFindingsRefinementDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleFindingsRefinementDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplication">detection_exclusion_application</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference">ChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archivedInput">archived_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput">detection_exclusion_application_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinementInput">findings_refinement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archived">archived</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinement">findings_refinement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `detection_exclusion_application`<sup>Required</sup> <a name="detection_exclusion_application" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplication"></a>

```python
detection_exclusion_application: ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeouts"></a>

```python
timeouts: ChronicleFindingsRefinementDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference">ChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `archived_input`<sup>Optional</sup> <a name="archived_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archivedInput"></a>

```python
archived_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `detection_exclusion_application_input`<sup>Optional</sup> <a name="detection_exclusion_application_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput"></a>

```python
detection_exclusion_application_input: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `findings_refinement_input`<sup>Optional</sup> <a name="findings_refinement_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinementInput"></a>

```python
findings_refinement_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ChronicleFindingsRefinementDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.archived"></a>

```python
archived: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `findings_refinement`<sup>Required</sup> <a name="findings_refinement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.findingsRefinement"></a>

```python
findings_refinement: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleFindingsRefinementDeploymentConfig <a name="ChronicleFindingsRefinementDeploymentConfig" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google import chronicle_findings_refinement_deployment

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  findings_refinement: str,
  instance: str,
  location: str,
  archived: bool | IResolvable = None,
  detection_exclusion_application: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication = None,
  enabled: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: ChronicleFindingsRefinementDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement">findings_refinement</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.archived">archived</a></code> | <code>bool \| cdktn.IResolvable</code> | The archive state of the findings refinement deployment. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication">detection_exclusion_application</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | detection_exclusion_application block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the findings refinement is currently deployed continuously against incoming findings. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `findings_refinement`<sup>Required</sup> <a name="findings_refinement" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement"></a>

```python
findings_refinement: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#findings_refinement ChronicleFindingsRefinementDeployment#findings_refinement}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#instance ChronicleFindingsRefinementDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#location ChronicleFindingsRefinementDeployment#location}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.archived"></a>

```python
archived: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The archive state of the findings refinement deployment.

Cannot be set to true unless enabled is set to false.
If currently set to true, enabled cannot be updated to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#archived ChronicleFindingsRefinementDeployment#archived}

---

##### `detection_exclusion_application`<sup>Optional</sup> <a name="detection_exclusion_application" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication"></a>

```python
detection_exclusion_application: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

detection_exclusion_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#detection_exclusion_application ChronicleFindingsRefinementDeployment#detection_exclusion_application}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the findings refinement is currently deployed continuously against incoming findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#enabled ChronicleFindingsRefinementDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#id ChronicleFindingsRefinementDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#project ChronicleFindingsRefinementDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentConfig.property.timeouts"></a>

```python
timeouts: ChronicleFindingsRefinementDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#timeouts ChronicleFindingsRefinementDeployment#timeouts}

---

### ChronicleFindingsRefinementDeploymentDetectionExclusionApplication <a name="ChronicleFindingsRefinementDeploymentDetectionExclusionApplication" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.Initializer"></a>

```python
from cdktn_provider_google import chronicle_findings_refinement_deployment

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication(
  curated_rules: typing.List[str] = None,
  curated_rule_sets: typing.List[str] = None,
  rules: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules">curated_rules</a></code> | <code>typing.List[str]</code> | The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets">curated_rule_sets</a></code> | <code>typing.List[str]</code> | The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules">rules</a></code> | <code>typing.List[str]</code> | The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}. |

---

##### `curated_rules`<sup>Optional</sup> <a name="curated_rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules"></a>

```python
curated_rules: typing.List[str]
```

- *Type:* typing.List[str]

The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#curated_rules ChronicleFindingsRefinementDeployment#curated_rules}

---

##### `curated_rule_sets`<sup>Optional</sup> <a name="curated_rule_sets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets"></a>

```python
curated_rule_sets: typing.List[str]
```

- *Type:* typing.List[str]

The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#curated_rule_sets ChronicleFindingsRefinementDeployment#curated_rule_sets}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules"></a>

```python
rules: typing.List[str]
```

- *Type:* typing.List[str]

The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#rules ChronicleFindingsRefinementDeployment#rules}

---

### ChronicleFindingsRefinementDeploymentTimeouts <a name="ChronicleFindingsRefinementDeploymentTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import chronicle_findings_refinement_deployment

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#create ChronicleFindingsRefinementDeployment#create}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#delete ChronicleFindingsRefinementDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#update ChronicleFindingsRefinementDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#create ChronicleFindingsRefinementDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#delete ChronicleFindingsRefinementDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/chronicle_findings_refinement_deployment#update ChronicleFindingsRefinementDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference <a name="ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_findings_refinement_deployment

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules">reset_curated_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets">reset_curated_rule_sets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_curated_rules` <a name="reset_curated_rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules"></a>

```python
def reset_curated_rules() -> None
```

##### `reset_curated_rule_sets` <a name="reset_curated_rule_sets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets"></a>

```python
def reset_curated_rule_sets() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets">deleted_curated_rule_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput">curated_rule_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput">curated_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules">curated_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets">curated_rule_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules">rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deleted_curated_rule_sets`<sup>Required</sup> <a name="deleted_curated_rule_sets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets"></a>

```python
deleted_curated_rule_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `curated_rule_sets_input`<sup>Optional</sup> <a name="curated_rule_sets_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput"></a>

```python
curated_rule_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `curated_rules_input`<sup>Optional</sup> <a name="curated_rules_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput"></a>

```python
curated_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput"></a>

```python
rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `curated_rules`<sup>Required</sup> <a name="curated_rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules"></a>

```python
curated_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `curated_rule_sets`<sup>Required</sup> <a name="curated_rule_sets" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets"></a>

```python
curated_rule_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules"></a>

```python
rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleFindingsRefinementDeploymentDetectionExclusionApplication
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentDetectionExclusionApplication">ChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---


### ChronicleFindingsRefinementDeploymentTimeoutsOutputReference <a name="ChronicleFindingsRefinementDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_findings_refinement_deployment

chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleFindingsRefinementDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleFindingsRefinementDeployment.ChronicleFindingsRefinementDeploymentTimeouts">ChronicleFindingsRefinementDeploymentTimeouts</a>

---



