# `networkSecurityMirroringDeployment` Submodule <a name="`networkSecurityMirroringDeployment` Submodule" id="@cdktn/provider-google.networkSecurityMirroringDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityMirroringDeployment <a name="NetworkSecurityMirroringDeployment" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment google_network_security_mirroring_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer"></a>

```python
from cdktn_provider_google import network_security_mirroring_deployment

networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  forwarding_rule: str,
  location: str,
  mirroring_deployment_group: str,
  mirroring_deployment_id: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkSecurityMirroringDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.forwardingRule">forwarding_rule</a></code> | <code>str</code> | The regional forwarding rule that fronts the mirroring collectors, for example: 'projects/123456789/regions/us-central1/forwardingRules/my-rule'. See https://google.aip.dev/124. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | The cloud location of the deployment, e.g. 'us-central1-a' or 'asia-south1-b'. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.mirroringDeploymentGroup">mirroring_deployment_group</a></code> | <code>str</code> | The deployment group that this deployment is a part of, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.mirroringDeploymentId">mirroring_deployment_id</a></code> | <code>str</code> | The ID to use for the new deployment, which will become the final component of the deployment's resource name. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description of the deployment. Used as additional context for the deployment. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#id NetworkSecurityMirroringDeployment#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#project NetworkSecurityMirroringDeployment#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.forwardingRule"></a>

- *Type:* str

The regional forwarding rule that fronts the mirroring collectors, for example: 'projects/123456789/regions/us-central1/forwardingRules/my-rule'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#forwarding_rule NetworkSecurityMirroringDeployment#forwarding_rule}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.location"></a>

- *Type:* str

The cloud location of the deployment, e.g. 'us-central1-a' or 'asia-south1-b'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#location NetworkSecurityMirroringDeployment#location}

---

##### `mirroring_deployment_group`<sup>Required</sup> <a name="mirroring_deployment_group" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.mirroringDeploymentGroup"></a>

- *Type:* str

The deployment group that this deployment is a part of, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#mirroring_deployment_group NetworkSecurityMirroringDeployment#mirroring_deployment_group}

---

##### `mirroring_deployment_id`<sup>Required</sup> <a name="mirroring_deployment_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.mirroringDeploymentId"></a>

- *Type:* str

The ID to use for the new deployment, which will become the final component of the deployment's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#mirroring_deployment_id NetworkSecurityMirroringDeployment#mirroring_deployment_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#deletion_policy NetworkSecurityMirroringDeployment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.description"></a>

- *Type:* str

User-provided description of the deployment. Used as additional context for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#description NetworkSecurityMirroringDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#id NetworkSecurityMirroringDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#labels NetworkSecurityMirroringDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#project NetworkSecurityMirroringDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#timeouts NetworkSecurityMirroringDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#create NetworkSecurityMirroringDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#delete NetworkSecurityMirroringDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#update NetworkSecurityMirroringDeployment#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkSecurityMirroringDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isConstruct"></a>

```python
from cdktn_provider_google import network_security_mirroring_deployment

networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google import network_security_mirroring_deployment

networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google import network_security_mirroring_deployment

networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_security_mirroring_deployment

networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkSecurityMirroringDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecurityMirroringDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecurityMirroringDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityMirroringDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference">NetworkSecurityMirroringDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forwardingRuleInput">forwarding_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentGroupInput">mirroring_deployment_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentIdInput">mirroring_deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentGroup">mirroring_deployment_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentId">mirroring_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.timeouts"></a>

```python
timeouts: NetworkSecurityMirroringDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference">NetworkSecurityMirroringDeploymentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `forwarding_rule_input`<sup>Optional</sup> <a name="forwarding_rule_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forwardingRuleInput"></a>

```python
forwarding_rule_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mirroring_deployment_group_input`<sup>Optional</sup> <a name="mirroring_deployment_group_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentGroupInput"></a>

```python
mirroring_deployment_group_input: str
```

- *Type:* str

---

##### `mirroring_deployment_id_input`<sup>Optional</sup> <a name="mirroring_deployment_id_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentIdInput"></a>

```python
mirroring_deployment_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkSecurityMirroringDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mirroring_deployment_group`<sup>Required</sup> <a name="mirroring_deployment_group" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentGroup"></a>

```python
mirroring_deployment_group: str
```

- *Type:* str

---

##### `mirroring_deployment_id`<sup>Required</sup> <a name="mirroring_deployment_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.mirroringDeploymentId"></a>

```python
mirroring_deployment_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityMirroringDeploymentConfig <a name="NetworkSecurityMirroringDeploymentConfig" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google import network_security_mirroring_deployment

networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  forwarding_rule: str,
  location: str,
  mirroring_deployment_group: str,
  mirroring_deployment_id: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkSecurityMirroringDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | The regional forwarding rule that fronts the mirroring collectors, for example: 'projects/123456789/regions/us-central1/forwardingRules/my-rule'. See https://google.aip.dev/124. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.location">location</a></code> | <code>str</code> | The cloud location of the deployment, e.g. 'us-central1-a' or 'asia-south1-b'. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.mirroringDeploymentGroup">mirroring_deployment_group</a></code> | <code>str</code> | The deployment group that this deployment is a part of, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.mirroringDeploymentId">mirroring_deployment_id</a></code> | <code>str</code> | The ID to use for the new deployment, which will become the final component of the deployment's resource name. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.description">description</a></code> | <code>str</code> | User-provided description of the deployment. Used as additional context for the deployment. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#id NetworkSecurityMirroringDeployment#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#project NetworkSecurityMirroringDeployment#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

The regional forwarding rule that fronts the mirroring collectors, for example: 'projects/123456789/regions/us-central1/forwardingRules/my-rule'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#forwarding_rule NetworkSecurityMirroringDeployment#forwarding_rule}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The cloud location of the deployment, e.g. 'us-central1-a' or 'asia-south1-b'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#location NetworkSecurityMirroringDeployment#location}

---

##### `mirroring_deployment_group`<sup>Required</sup> <a name="mirroring_deployment_group" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.mirroringDeploymentGroup"></a>

```python
mirroring_deployment_group: str
```

- *Type:* str

The deployment group that this deployment is a part of, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#mirroring_deployment_group NetworkSecurityMirroringDeployment#mirroring_deployment_group}

---

##### `mirroring_deployment_id`<sup>Required</sup> <a name="mirroring_deployment_id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.mirroringDeploymentId"></a>

```python
mirroring_deployment_id: str
```

- *Type:* str

The ID to use for the new deployment, which will become the final component of the deployment's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#mirroring_deployment_id NetworkSecurityMirroringDeployment#mirroring_deployment_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#deletion_policy NetworkSecurityMirroringDeployment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description of the deployment. Used as additional context for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#description NetworkSecurityMirroringDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#id NetworkSecurityMirroringDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#labels NetworkSecurityMirroringDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#project NetworkSecurityMirroringDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentConfig.property.timeouts"></a>

```python
timeouts: NetworkSecurityMirroringDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#timeouts NetworkSecurityMirroringDeployment#timeouts}

---

### NetworkSecurityMirroringDeploymentTimeouts <a name="NetworkSecurityMirroringDeploymentTimeouts" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_security_mirroring_deployment

networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#create NetworkSecurityMirroringDeployment#create}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#delete NetworkSecurityMirroringDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#update NetworkSecurityMirroringDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#create NetworkSecurityMirroringDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#delete NetworkSecurityMirroringDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_security_mirroring_deployment#update NetworkSecurityMirroringDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityMirroringDeploymentTimeoutsOutputReference <a name="NetworkSecurityMirroringDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_security_mirroring_deployment

networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkSecurityMirroringDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkSecurityMirroringDeployment.NetworkSecurityMirroringDeploymentTimeouts">NetworkSecurityMirroringDeploymentTimeouts</a>

---



