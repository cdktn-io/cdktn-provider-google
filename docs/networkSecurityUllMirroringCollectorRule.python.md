# `networkSecurityUllMirroringCollectorRule` Submodule <a name="`networkSecurityUllMirroringCollectorRule` Submodule" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityUllMirroringCollectorRule <a name="NetworkSecurityUllMirroringCollectorRule" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule google_network_security_ull_mirroring_collector_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer"></a>

```python
from cdktn_provider_google import network_security_ull_mirroring_collector_rule

networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule(
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
  match: NetworkSecurityUllMirroringCollectorRuleMatch,
  ull_mirroring_collector: str,
  ull_mirroring_collector_rule_id: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkSecurityUllMirroringCollectorRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollector">ull_mirroring_collector</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollectorRuleId">ull_mirroring_collector_rule_id</a></code> | <code>str</code> | ID for the new UllMirroringCollectorRule. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#id NetworkSecurityUllMirroringCollectorRule#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#project NetworkSecurityUllMirroringCollectorRule#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#location NetworkSecurityUllMirroringCollectorRule#location}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#match NetworkSecurityUllMirroringCollectorRule#match}

---

##### `ull_mirroring_collector`<sup>Required</sup> <a name="ull_mirroring_collector" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollector"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#ull_mirroring_collector NetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector}

---

##### `ull_mirroring_collector_rule_id`<sup>Required</sup> <a name="ull_mirroring_collector_rule_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollectorRuleId"></a>

- *Type:* str

ID for the new UllMirroringCollectorRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#ull_mirroring_collector_rule_id NetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector_rule_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#deletion_policy NetworkSecurityUllMirroringCollectorRule#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#id NetworkSecurityUllMirroringCollectorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#labels NetworkSecurityUllMirroringCollectorRule#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#project NetworkSecurityUllMirroringCollectorRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#timeouts NetworkSecurityUllMirroringCollectorRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_match` <a name="put_match" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch"></a>

```python
def put_match(
  direction: str = None,
  dst_ip_ranges: typing.List[str] = None,
  ip_protocols: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch.parameter.direction"></a>

- *Type:* str

Direction of traffic to match.

When unset, matches any direction.
Possible values:
INGRESS: Traffic inbound to the capture point.
EGRESS: Traffic outbound from the capture point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#direction NetworkSecurityUllMirroringCollectorRule#direction}

---

###### `dst_ip_ranges`<sup>Optional</sup> <a name="dst_ip_ranges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch.parameter.dstIpRanges"></a>

- *Type:* typing.List[str]

Destination IP ranges to match. When unset, matches any destination IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#dst_ip_ranges NetworkSecurityUllMirroringCollectorRule#dst_ip_ranges}

---

###### `ip_protocols`<sup>Optional</sup> <a name="ip_protocols" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch.parameter.ipProtocols"></a>

- *Type:* typing.List[str]

IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#ip_protocols NetworkSecurityUllMirroringCollectorRule#ip_protocols}

---

###### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putMatch.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

Source IP ranges to match. When unset, matches any source IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#src_ip_ranges NetworkSecurityUllMirroringCollectorRule#src_ip_ranges}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#create NetworkSecurityUllMirroringCollectorRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#delete NetworkSecurityUllMirroringCollectorRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#update NetworkSecurityUllMirroringCollectorRule#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isConstruct"></a>

```python
from cdktn_provider_google import network_security_ull_mirroring_collector_rule

networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformElement"></a>

```python
from cdktn_provider_google import network_security_ull_mirroring_collector_rule

networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformResource"></a>

```python
from cdktn_provider_google import network_security_ull_mirroring_collector_rule

networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_security_ull_mirroring_collector_rule

networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecurityUllMirroringCollectorRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecurityUllMirroringCollectorRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityUllMirroringCollectorRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference">NetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.matchInput">match_input</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput">ull_mirroring_collector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput">ull_mirroring_collector_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector">ull_mirroring_collector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId">ull_mirroring_collector_rule_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.match"></a>

```python
match: NetworkSecurityUllMirroringCollectorRuleMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference">NetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeouts"></a>

```python
timeouts: NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.matchInput"></a>

```python
match_input: NetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkSecurityUllMirroringCollectorRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---

##### `ull_mirroring_collector_input`<sup>Optional</sup> <a name="ull_mirroring_collector_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput"></a>

```python
ull_mirroring_collector_input: str
```

- *Type:* str

---

##### `ull_mirroring_collector_rule_id_input`<sup>Optional</sup> <a name="ull_mirroring_collector_rule_id_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput"></a>

```python
ull_mirroring_collector_rule_id_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `ull_mirroring_collector`<sup>Required</sup> <a name="ull_mirroring_collector" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector"></a>

```python
ull_mirroring_collector: str
```

- *Type:* str

---

##### `ull_mirroring_collector_rule_id`<sup>Required</sup> <a name="ull_mirroring_collector_rule_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId"></a>

```python
ull_mirroring_collector_rule_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityUllMirroringCollectorRuleConfig <a name="NetworkSecurityUllMirroringCollectorRuleConfig" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.Initializer"></a>

```python
from cdktn_provider_google import network_security_ull_mirroring_collector_rule

networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  match: NetworkSecurityUllMirroringCollectorRuleMatch,
  ull_mirroring_collector: str,
  ull_mirroring_collector_rule_id: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkSecurityUllMirroringCollectorRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector">ull_mirroring_collector</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId">ull_mirroring_collector_rule_id</a></code> | <code>str</code> | ID for the new UllMirroringCollectorRule. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#id NetworkSecurityUllMirroringCollectorRule#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#project NetworkSecurityUllMirroringCollectorRule#project}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#location NetworkSecurityUllMirroringCollectorRule#location}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.match"></a>

```python
match: NetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#match NetworkSecurityUllMirroringCollectorRule#match}

---

##### `ull_mirroring_collector`<sup>Required</sup> <a name="ull_mirroring_collector" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector"></a>

```python
ull_mirroring_collector: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#ull_mirroring_collector NetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector}

---

##### `ull_mirroring_collector_rule_id`<sup>Required</sup> <a name="ull_mirroring_collector_rule_id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId"></a>

```python
ull_mirroring_collector_rule_id: str
```

- *Type:* str

ID for the new UllMirroringCollectorRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#ull_mirroring_collector_rule_id NetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector_rule_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#deletion_policy NetworkSecurityUllMirroringCollectorRule#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#id NetworkSecurityUllMirroringCollectorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#labels NetworkSecurityUllMirroringCollectorRule#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#project NetworkSecurityUllMirroringCollectorRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts"></a>

```python
timeouts: NetworkSecurityUllMirroringCollectorRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#timeouts NetworkSecurityUllMirroringCollectorRule#timeouts}

---

### NetworkSecurityUllMirroringCollectorRuleMatch <a name="NetworkSecurityUllMirroringCollectorRuleMatch" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.Initializer"></a>

```python
from cdktn_provider_google import network_security_ull_mirroring_collector_rule

networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch(
  direction: str = None,
  dst_ip_ranges: typing.List[str] = None,
  ip_protocols: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.direction">direction</a></code> | <code>str</code> | Direction of traffic to match. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges">dst_ip_ranges</a></code> | <code>typing.List[str]</code> | Destination IP ranges to match. When unset, matches any destination IP range. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols">ip_protocols</a></code> | <code>typing.List[str]</code> | IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | Source IP ranges to match. When unset, matches any source IP range. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction of traffic to match.

When unset, matches any direction.
Possible values:
INGRESS: Traffic inbound to the capture point.
EGRESS: Traffic outbound from the capture point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#direction NetworkSecurityUllMirroringCollectorRule#direction}

---

##### `dst_ip_ranges`<sup>Optional</sup> <a name="dst_ip_ranges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges"></a>

```python
dst_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Destination IP ranges to match. When unset, matches any destination IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#dst_ip_ranges NetworkSecurityUllMirroringCollectorRule#dst_ip_ranges}

---

##### `ip_protocols`<sup>Optional</sup> <a name="ip_protocols" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols"></a>

```python
ip_protocols: typing.List[str]
```

- *Type:* typing.List[str]

IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#ip_protocols NetworkSecurityUllMirroringCollectorRule#ip_protocols}

---

##### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Source IP ranges to match. When unset, matches any source IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#src_ip_ranges NetworkSecurityUllMirroringCollectorRule#src_ip_ranges}

---

### NetworkSecurityUllMirroringCollectorRuleTimeouts <a name="NetworkSecurityUllMirroringCollectorRuleTimeouts" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_security_ull_mirroring_collector_rule

networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#create NetworkSecurityUllMirroringCollectorRule#create}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#delete NetworkSecurityUllMirroringCollectorRule#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#update NetworkSecurityUllMirroringCollectorRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#create NetworkSecurityUllMirroringCollectorRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#delete NetworkSecurityUllMirroringCollectorRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_security_ull_mirroring_collector_rule#update NetworkSecurityUllMirroringCollectorRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityUllMirroringCollectorRuleMatchOutputReference <a name="NetworkSecurityUllMirroringCollectorRuleMatchOutputReference" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_security_ull_mirroring_collector_rule

networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges">reset_dst_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols">reset_ip_protocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges">reset_src_ip_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_dst_ip_ranges` <a name="reset_dst_ip_ranges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges"></a>

```python
def reset_dst_ip_ranges() -> None
```

##### `reset_ip_protocols` <a name="reset_ip_protocols" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols"></a>

```python
def reset_ip_protocols() -> None
```

##### `reset_src_ip_ranges` <a name="reset_src_ip_ranges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges"></a>

```python
def reset_src_ip_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput">dst_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput">ip_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges">dst_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols">ip_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `dst_ip_ranges_input`<sup>Optional</sup> <a name="dst_ip_ranges_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput"></a>

```python
dst_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocols_input`<sup>Optional</sup> <a name="ip_protocols_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput"></a>

```python
ip_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `dst_ip_ranges`<sup>Required</sup> <a name="dst_ip_ranges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges"></a>

```python
dst_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocols`<sup>Required</sup> <a name="ip_protocols" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols"></a>

```python
ip_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleMatch">NetworkSecurityUllMirroringCollectorRuleMatch</a>

---


### NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference <a name="NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_security_ull_mirroring_collector_rule

networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkSecurityUllMirroringCollectorRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkSecurityUllMirroringCollectorRule.NetworkSecurityUllMirroringCollectorRuleTimeouts">NetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---



