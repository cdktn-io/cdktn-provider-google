# `networkSecurityFirewallEndpoint` Submodule <a name="`networkSecurityFirewallEndpoint` Submodule" id="@cdktn/provider-google.networkSecurityFirewallEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityFirewallEndpoint <a name="NetworkSecurityFirewallEndpoint" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint google_network_security_firewall_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint(
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
  name: str,
  parent: str,
  billing_project_id: str = None,
  deletion_policy: str = None,
  endpoint_settings: NetworkSecurityFirewallEndpointEndpointSettings = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  timeouts: NetworkSecurityFirewallEndpointTimeouts = None,
  wildfire_settings: NetworkSecurityFirewallEndpointWildfireSettings = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.location">location</a></code> | <code>str</code> | The location (zone) of the firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the firewall endpoint resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.billingProjectId">billing_project_id</a></code> | <code>str</code> | Project to charge for the deployed firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.endpointSettings">endpoint_settings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a></code> | endpoint_settings block. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#id NetworkSecurityFirewallEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.wildfireSettings">wildfire_settings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a></code> | wildfire_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.location"></a>

- *Type:* str

The location (zone) of the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#location NetworkSecurityFirewallEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.name"></a>

- *Type:* str

The name of the firewall endpoint resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#name NetworkSecurityFirewallEndpoint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.parent"></a>

- *Type:* str

The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#parent NetworkSecurityFirewallEndpoint#parent}

---

##### `billing_project_id`<sup>Optional</sup> <a name="billing_project_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.billingProjectId"></a>

- *Type:* str

Project to charge for the deployed firewall endpoint.

This field is required for organization-scoped endpoints.
For project-scoped endpoints, it is optional but must match the
endpoint's project if specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#billing_project_id NetworkSecurityFirewallEndpoint#billing_project_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#deletion_policy NetworkSecurityFirewallEndpoint#deletion_policy}

---

##### `endpoint_settings`<sup>Optional</sup> <a name="endpoint_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.endpointSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#endpoint_settings NetworkSecurityFirewallEndpoint#endpoint_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#id NetworkSecurityFirewallEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#labels NetworkSecurityFirewallEndpoint#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#timeouts NetworkSecurityFirewallEndpoint#timeouts}

---

##### `wildfire_settings`<sup>Optional</sup> <a name="wildfire_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.Initializer.parameter.wildfireSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a>

wildfire_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_settings NetworkSecurityFirewallEndpoint#wildfire_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putEndpointSettings">put_endpoint_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putWildfireSettings">put_wildfire_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetBillingProjectId">reset_billing_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetEndpointSettings">reset_endpoint_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetWildfireSettings">reset_wildfire_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint_settings` <a name="put_endpoint_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putEndpointSettings"></a>

```python
def put_endpoint_settings(
  content_cloud_region: str = None,
  http_partial_response_blocked: bool | IResolvable = None,
  jumbo_frames_enabled: bool | IResolvable = None
) -> None
```

###### `content_cloud_region`<sup>Optional</sup> <a name="content_cloud_region" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putEndpointSettings.parameter.contentCloudRegion"></a>

- *Type:* str

The Palo Alto Networks content cloud region of the firewall endpoint, for example 'US_CENTRAL' or 'CANADA'.

See
[API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#contentcloudregion)
for the list of supported regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#content_cloud_region NetworkSecurityFirewallEndpoint#content_cloud_region}

---

###### `http_partial_response_blocked`<sup>Optional</sup> <a name="http_partial_response_blocked" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putEndpointSettings.parameter.httpPartialResponseBlocked"></a>

- *Type:* bool | cdktn.IResolvable

Whether to block HTTP partial responses for the firewall endpoint.

When 'true', resumption of blocked malicious HTTP file downloads is
blocked by the firewall. 'false' provides maximum availability, 'true'
provides maximum security.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#http_partial_response_blocked NetworkSecurityFirewallEndpoint#http_partial_response_blocked}

---

###### `jumbo_frames_enabled`<sup>Optional</sup> <a name="jumbo_frames_enabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putEndpointSettings.parameter.jumboFramesEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether Jumbo Frames are enabled for the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#jumbo_frames_enabled NetworkSecurityFirewallEndpoint#jumbo_frames_enabled}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#create NetworkSecurityFirewallEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#delete NetworkSecurityFirewallEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#update NetworkSecurityFirewallEndpoint#update}.

---

##### `put_wildfire_settings` <a name="put_wildfire_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putWildfireSettings"></a>

```python
def put_wildfire_settings(
  enabled: bool | IResolvable = None,
  wildfire_inline_cloud_analysis_settings: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings = None,
  wildfire_realtime_lookup_duration: str = None,
  wildfire_realtime_lookup_timeout_action: str = None,
  wildfire_region: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putWildfireSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether WildFire is enabled for the firewall endpoint.

Enabling WildFire requires accepting the WildFire end-user license
agreement (EULA) for the endpoint's billing project; see
[Configure WildFire](https://docs.cloud.google.com/firewall/docs/configure-wildfire).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#enabled NetworkSecurityFirewallEndpoint#enabled}

---

###### `wildfire_inline_cloud_analysis_settings`<sup>Optional</sup> <a name="wildfire_inline_cloud_analysis_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putWildfireSettings.parameter.wildfireInlineCloudAnalysisSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

wildfire_inline_cloud_analysis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_inline_cloud_analysis_settings NetworkSecurityFirewallEndpoint#wildfire_inline_cloud_analysis_settings}

---

###### `wildfire_realtime_lookup_duration`<sup>Optional</sup> <a name="wildfire_realtime_lookup_duration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putWildfireSettings.parameter.wildfireRealtimeLookupDuration"></a>

- *Type:* str

The duration for which the firewall endpoint waits for a real-time signature lookup response from the WildFire cloud before taking the configured timeout action (1ms to 5000ms, default 1000ms).

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_realtime_lookup_duration NetworkSecurityFirewallEndpoint#wildfire_realtime_lookup_duration}

---

###### `wildfire_realtime_lookup_timeout_action`<sup>Optional</sup> <a name="wildfire_realtime_lookup_timeout_action" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putWildfireSettings.parameter.wildfireRealtimeLookupTimeoutAction"></a>

- *Type:* str

The action to take when a WildFire real-time signature lookup times out. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_realtime_lookup_timeout_action NetworkSecurityFirewallEndpoint#wildfire_realtime_lookup_timeout_action}

---

###### `wildfire_region`<sup>Optional</sup> <a name="wildfire_region" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.putWildfireSettings.parameter.wildfireRegion"></a>

- *Type:* str

The WildFire region for the firewall endpoint, for example 'UNITED_STATES' or 'CANADA'. See [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#wildfireregion) for the list of supported regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_region NetworkSecurityFirewallEndpoint#wildfire_region}

---

##### `reset_billing_project_id` <a name="reset_billing_project_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetBillingProjectId"></a>

```python
def reset_billing_project_id() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_endpoint_settings` <a name="reset_endpoint_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetEndpointSettings"></a>

```python
def reset_endpoint_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wildfire_settings` <a name="reset_wildfire_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.resetWildfireSettings"></a>

```python
def reset_wildfire_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkSecurityFirewallEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkSecurityFirewallEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecurityFirewallEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecurityFirewallEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityFirewallEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.associatedNetworks">associated_networks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettings">endpoint_settings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference">NetworkSecurityFirewallEndpointEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference">NetworkSecurityFirewallEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.wildfireSettings">wildfire_settings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference">NetworkSecurityFirewallEndpointWildfireSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectIdInput">billing_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettingsInput">endpoint_settings_input</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.wildfireSettingsInput">wildfire_settings_input</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectId">billing_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_networks`<sup>Required</sup> <a name="associated_networks" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.associatedNetworks"></a>

```python
associated_networks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `endpoint_settings`<sup>Required</sup> <a name="endpoint_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettings"></a>

```python
endpoint_settings: NetworkSecurityFirewallEndpointEndpointSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference">NetworkSecurityFirewallEndpointEndpointSettingsOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeouts"></a>

```python
timeouts: NetworkSecurityFirewallEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference">NetworkSecurityFirewallEndpointTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `wildfire_settings`<sup>Required</sup> <a name="wildfire_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.wildfireSettings"></a>

```python
wildfire_settings: NetworkSecurityFirewallEndpointWildfireSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference">NetworkSecurityFirewallEndpointWildfireSettingsOutputReference</a>

---

##### `billing_project_id_input`<sup>Optional</sup> <a name="billing_project_id_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectIdInput"></a>

```python
billing_project_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `endpoint_settings_input`<sup>Optional</sup> <a name="endpoint_settings_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.endpointSettingsInput"></a>

```python
endpoint_settings_input: NetworkSecurityFirewallEndpointEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkSecurityFirewallEndpointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

---

##### `wildfire_settings_input`<sup>Optional</sup> <a name="wildfire_settings_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.wildfireSettingsInput"></a>

```python
wildfire_settings_input: NetworkSecurityFirewallEndpointWildfireSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a>

---

##### `billing_project_id`<sup>Required</sup> <a name="billing_project_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.billingProjectId"></a>

```python
billing_project_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityFirewallEndpointConfig <a name="NetworkSecurityFirewallEndpointConfig" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.Initializer"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  parent: str,
  billing_project_id: str = None,
  deletion_policy: str = None,
  endpoint_settings: NetworkSecurityFirewallEndpointEndpointSettings = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  timeouts: NetworkSecurityFirewallEndpointTimeouts = None,
  wildfire_settings: NetworkSecurityFirewallEndpointWildfireSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.location">location</a></code> | <code>str</code> | The location (zone) of the firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.name">name</a></code> | <code>str</code> | The name of the firewall endpoint resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.parent">parent</a></code> | <code>str</code> | The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.billingProjectId">billing_project_id</a></code> | <code>str</code> | Project to charge for the deployed firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.endpointSettings">endpoint_settings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a></code> | endpoint_settings block. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#id NetworkSecurityFirewallEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.wildfireSettings">wildfire_settings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a></code> | wildfire_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location (zone) of the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#location NetworkSecurityFirewallEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the firewall endpoint resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#name NetworkSecurityFirewallEndpoint#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The name of the parent this firewall endpoint belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#parent NetworkSecurityFirewallEndpoint#parent}

---

##### `billing_project_id`<sup>Optional</sup> <a name="billing_project_id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.billingProjectId"></a>

```python
billing_project_id: str
```

- *Type:* str

Project to charge for the deployed firewall endpoint.

This field is required for organization-scoped endpoints.
For project-scoped endpoints, it is optional but must match the
endpoint's project if specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#billing_project_id NetworkSecurityFirewallEndpoint#billing_project_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#deletion_policy NetworkSecurityFirewallEndpoint#deletion_policy}

---

##### `endpoint_settings`<sup>Optional</sup> <a name="endpoint_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.endpointSettings"></a>

```python
endpoint_settings: NetworkSecurityFirewallEndpointEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#endpoint_settings NetworkSecurityFirewallEndpoint#endpoint_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#id NetworkSecurityFirewallEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#labels NetworkSecurityFirewallEndpoint#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.timeouts"></a>

```python
timeouts: NetworkSecurityFirewallEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#timeouts NetworkSecurityFirewallEndpoint#timeouts}

---

##### `wildfire_settings`<sup>Optional</sup> <a name="wildfire_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointConfig.property.wildfireSettings"></a>

```python
wildfire_settings: NetworkSecurityFirewallEndpointWildfireSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a>

wildfire_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_settings NetworkSecurityFirewallEndpoint#wildfire_settings}

---

### NetworkSecurityFirewallEndpointEndpointSettings <a name="NetworkSecurityFirewallEndpointEndpointSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.Initializer"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings(
  content_cloud_region: str = None,
  http_partial_response_blocked: bool | IResolvable = None,
  jumbo_frames_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.contentCloudRegion">content_cloud_region</a></code> | <code>str</code> | The Palo Alto Networks content cloud region of the firewall endpoint, for example 'US_CENTRAL' or 'CANADA'. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.httpPartialResponseBlocked">http_partial_response_blocked</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to block HTTP partial responses for the firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.jumboFramesEnabled">jumbo_frames_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether Jumbo Frames are enabled for the firewall endpoint. |

---

##### `content_cloud_region`<sup>Optional</sup> <a name="content_cloud_region" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.contentCloudRegion"></a>

```python
content_cloud_region: str
```

- *Type:* str

The Palo Alto Networks content cloud region of the firewall endpoint, for example 'US_CENTRAL' or 'CANADA'.

See
[API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#contentcloudregion)
for the list of supported regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#content_cloud_region NetworkSecurityFirewallEndpoint#content_cloud_region}

---

##### `http_partial_response_blocked`<sup>Optional</sup> <a name="http_partial_response_blocked" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.httpPartialResponseBlocked"></a>

```python
http_partial_response_blocked: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to block HTTP partial responses for the firewall endpoint.

When 'true', resumption of blocked malicious HTTP file downloads is
blocked by the firewall. 'false' provides maximum availability, 'true'
provides maximum security.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#http_partial_response_blocked NetworkSecurityFirewallEndpoint#http_partial_response_blocked}

---

##### `jumbo_frames_enabled`<sup>Optional</sup> <a name="jumbo_frames_enabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings.property.jumboFramesEnabled"></a>

```python
jumbo_frames_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether Jumbo Frames are enabled for the firewall endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#jumbo_frames_enabled NetworkSecurityFirewallEndpoint#jumbo_frames_enabled}

---

### NetworkSecurityFirewallEndpointTimeouts <a name="NetworkSecurityFirewallEndpointTimeouts" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#create NetworkSecurityFirewallEndpoint#create}. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#delete NetworkSecurityFirewallEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#update NetworkSecurityFirewallEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#create NetworkSecurityFirewallEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#delete NetworkSecurityFirewallEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#update NetworkSecurityFirewallEndpoint#update}.

---

### NetworkSecurityFirewallEndpointWildfireSettings <a name="NetworkSecurityFirewallEndpointWildfireSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.Initializer"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings(
  enabled: bool | IResolvable = None,
  wildfire_inline_cloud_analysis_settings: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings = None,
  wildfire_realtime_lookup_duration: str = None,
  wildfire_realtime_lookup_timeout_action: str = None,
  wildfire_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether WildFire is enabled for the firewall endpoint. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireInlineCloudAnalysisSettings">wildfire_inline_cloud_analysis_settings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a></code> | wildfire_inline_cloud_analysis_settings block. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupDuration">wildfire_realtime_lookup_duration</a></code> | <code>str</code> | The duration for which the firewall endpoint waits for a real-time signature lookup response from the WildFire cloud before taking the configured timeout action (1ms to 5000ms, default 1000ms). |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupTimeoutAction">wildfire_realtime_lookup_timeout_action</a></code> | <code>str</code> | The action to take when a WildFire real-time signature lookup times out. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRegion">wildfire_region</a></code> | <code>str</code> | The WildFire region for the firewall endpoint, for example 'UNITED_STATES' or 'CANADA'. See [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#wildfireregion) for the list of supported regions. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether WildFire is enabled for the firewall endpoint.

Enabling WildFire requires accepting the WildFire end-user license
agreement (EULA) for the endpoint's billing project; see
[Configure WildFire](https://docs.cloud.google.com/firewall/docs/configure-wildfire).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#enabled NetworkSecurityFirewallEndpoint#enabled}

---

##### `wildfire_inline_cloud_analysis_settings`<sup>Optional</sup> <a name="wildfire_inline_cloud_analysis_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireInlineCloudAnalysisSettings"></a>

```python
wildfire_inline_cloud_analysis_settings: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

wildfire_inline_cloud_analysis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_inline_cloud_analysis_settings NetworkSecurityFirewallEndpoint#wildfire_inline_cloud_analysis_settings}

---

##### `wildfire_realtime_lookup_duration`<sup>Optional</sup> <a name="wildfire_realtime_lookup_duration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupDuration"></a>

```python
wildfire_realtime_lookup_duration: str
```

- *Type:* str

The duration for which the firewall endpoint waits for a real-time signature lookup response from the WildFire cloud before taking the configured timeout action (1ms to 5000ms, default 1000ms).

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_realtime_lookup_duration NetworkSecurityFirewallEndpoint#wildfire_realtime_lookup_duration}

---

##### `wildfire_realtime_lookup_timeout_action`<sup>Optional</sup> <a name="wildfire_realtime_lookup_timeout_action" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRealtimeLookupTimeoutAction"></a>

```python
wildfire_realtime_lookup_timeout_action: str
```

- *Type:* str

The action to take when a WildFire real-time signature lookup times out. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_realtime_lookup_timeout_action NetworkSecurityFirewallEndpoint#wildfire_realtime_lookup_timeout_action}

---

##### `wildfire_region`<sup>Optional</sup> <a name="wildfire_region" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings.property.wildfireRegion"></a>

```python
wildfire_region: str
```

- *Type:* str

The WildFire region for the firewall endpoint, for example 'UNITED_STATES' or 'CANADA'. See [API docs](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1beta1/organizations.locations.firewallEndpoints#wildfireregion) for the list of supported regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#wildfire_region NetworkSecurityFirewallEndpoint#wildfire_region}

---

### NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings <a name="NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.Initializer"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings(
  max_analysis_duration: str = None,
  submission_timeout_logging_disabled: bool | IResolvable = None,
  timeout_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.maxAnalysisDuration">max_analysis_duration</a></code> | <code>str</code> | The maximum duration for which the firewall endpoint holds a file while waiting for an inline cloud analysis verdict before taking the configured timeout action (1ms to 240000ms, default 30000ms). |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.submissionTimeoutLoggingDisabled">submission_timeout_logging_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether logging is disabled when a WildFire inline cloud analysis submission times out. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.timeoutAction">timeout_action</a></code> | <code>str</code> | The action to take when WildFire inline cloud analysis times out. Possible values: ["ALLOW", "DENY"]. |

---

##### `max_analysis_duration`<sup>Optional</sup> <a name="max_analysis_duration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.maxAnalysisDuration"></a>

```python
max_analysis_duration: str
```

- *Type:* str

The maximum duration for which the firewall endpoint holds a file while waiting for an inline cloud analysis verdict before taking the configured timeout action (1ms to 240000ms, default 30000ms).

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "30s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#max_analysis_duration NetworkSecurityFirewallEndpoint#max_analysis_duration}

---

##### `submission_timeout_logging_disabled`<sup>Optional</sup> <a name="submission_timeout_logging_disabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.submissionTimeoutLoggingDisabled"></a>

```python
submission_timeout_logging_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether logging is disabled when a WildFire inline cloud analysis submission times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#submission_timeout_logging_disabled NetworkSecurityFirewallEndpoint#submission_timeout_logging_disabled}

---

##### `timeout_action`<sup>Optional</sup> <a name="timeout_action" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

The action to take when WildFire inline cloud analysis times out. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#timeout_action NetworkSecurityFirewallEndpoint#timeout_action}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityFirewallEndpointEndpointSettingsOutputReference <a name="NetworkSecurityFirewallEndpointEndpointSettingsOutputReference" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetContentCloudRegion">reset_content_cloud_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetHttpPartialResponseBlocked">reset_http_partial_response_blocked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetJumboFramesEnabled">reset_jumbo_frames_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_cloud_region` <a name="reset_content_cloud_region" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetContentCloudRegion"></a>

```python
def reset_content_cloud_region() -> None
```

##### `reset_http_partial_response_blocked` <a name="reset_http_partial_response_blocked" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetHttpPartialResponseBlocked"></a>

```python
def reset_http_partial_response_blocked() -> None
```

##### `reset_jumbo_frames_enabled` <a name="reset_jumbo_frames_enabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.resetJumboFramesEnabled"></a>

```python
def reset_jumbo_frames_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegionInput">content_cloud_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlockedInput">http_partial_response_blocked_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabledInput">jumbo_frames_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegion">content_cloud_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlocked">http_partial_response_blocked</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabled">jumbo_frames_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_cloud_region_input`<sup>Optional</sup> <a name="content_cloud_region_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegionInput"></a>

```python
content_cloud_region_input: str
```

- *Type:* str

---

##### `http_partial_response_blocked_input`<sup>Optional</sup> <a name="http_partial_response_blocked_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlockedInput"></a>

```python
http_partial_response_blocked_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `jumbo_frames_enabled_input`<sup>Optional</sup> <a name="jumbo_frames_enabled_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabledInput"></a>

```python
jumbo_frames_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `content_cloud_region`<sup>Required</sup> <a name="content_cloud_region" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.contentCloudRegion"></a>

```python
content_cloud_region: str
```

- *Type:* str

---

##### `http_partial_response_blocked`<sup>Required</sup> <a name="http_partial_response_blocked" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.httpPartialResponseBlocked"></a>

```python
http_partial_response_blocked: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `jumbo_frames_enabled`<sup>Required</sup> <a name="jumbo_frames_enabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.jumboFramesEnabled"></a>

```python
jumbo_frames_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettingsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecurityFirewallEndpointEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointEndpointSettings">NetworkSecurityFirewallEndpointEndpointSettings</a>

---


### NetworkSecurityFirewallEndpointTimeoutsOutputReference <a name="NetworkSecurityFirewallEndpointTimeoutsOutputReference" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkSecurityFirewallEndpointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointTimeouts">NetworkSecurityFirewallEndpointTimeouts</a>

---


### NetworkSecurityFirewallEndpointWildfireSettingsOutputReference <a name="NetworkSecurityFirewallEndpointWildfireSettingsOutputReference" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.putWildfireInlineCloudAnalysisSettings">put_wildfire_inline_cloud_analysis_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireInlineCloudAnalysisSettings">reset_wildfire_inline_cloud_analysis_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupDuration">reset_wildfire_realtime_lookup_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupTimeoutAction">reset_wildfire_realtime_lookup_timeout_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRegion">reset_wildfire_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_wildfire_inline_cloud_analysis_settings` <a name="put_wildfire_inline_cloud_analysis_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.putWildfireInlineCloudAnalysisSettings"></a>

```python
def put_wildfire_inline_cloud_analysis_settings(
  max_analysis_duration: str = None,
  submission_timeout_logging_disabled: bool | IResolvable = None,
  timeout_action: str = None
) -> None
```

###### `max_analysis_duration`<sup>Optional</sup> <a name="max_analysis_duration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.putWildfireInlineCloudAnalysisSettings.parameter.maxAnalysisDuration"></a>

- *Type:* str

The maximum duration for which the firewall endpoint holds a file while waiting for an inline cloud analysis verdict before taking the configured timeout action (1ms to 240000ms, default 30000ms).

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "30s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#max_analysis_duration NetworkSecurityFirewallEndpoint#max_analysis_duration}

---

###### `submission_timeout_logging_disabled`<sup>Optional</sup> <a name="submission_timeout_logging_disabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.putWildfireInlineCloudAnalysisSettings.parameter.submissionTimeoutLoggingDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether logging is disabled when a WildFire inline cloud analysis submission times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#submission_timeout_logging_disabled NetworkSecurityFirewallEndpoint#submission_timeout_logging_disabled}

---

###### `timeout_action`<sup>Optional</sup> <a name="timeout_action" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.putWildfireInlineCloudAnalysisSettings.parameter.timeoutAction"></a>

- *Type:* str

The action to take when WildFire inline cloud analysis times out. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/network_security_firewall_endpoint#timeout_action NetworkSecurityFirewallEndpoint#timeout_action}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_wildfire_inline_cloud_analysis_settings` <a name="reset_wildfire_inline_cloud_analysis_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireInlineCloudAnalysisSettings"></a>

```python
def reset_wildfire_inline_cloud_analysis_settings() -> None
```

##### `reset_wildfire_realtime_lookup_duration` <a name="reset_wildfire_realtime_lookup_duration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupDuration"></a>

```python
def reset_wildfire_realtime_lookup_duration() -> None
```

##### `reset_wildfire_realtime_lookup_timeout_action` <a name="reset_wildfire_realtime_lookup_timeout_action" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRealtimeLookupTimeoutAction"></a>

```python
def reset_wildfire_realtime_lookup_timeout_action() -> None
```

##### `reset_wildfire_region` <a name="reset_wildfire_region" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.resetWildfireRegion"></a>

```python
def reset_wildfire_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettings">wildfire_inline_cloud_analysis_settings</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettingsInput">wildfire_inline_cloud_analysis_settings_input</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDurationInput">wildfire_realtime_lookup_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutActionInput">wildfire_realtime_lookup_timeout_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegionInput">wildfire_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDuration">wildfire_realtime_lookup_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutAction">wildfire_realtime_lookup_timeout_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegion">wildfire_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `wildfire_inline_cloud_analysis_settings`<sup>Required</sup> <a name="wildfire_inline_cloud_analysis_settings" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettings"></a>

```python
wildfire_inline_cloud_analysis_settings: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `wildfire_inline_cloud_analysis_settings_input`<sup>Optional</sup> <a name="wildfire_inline_cloud_analysis_settings_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireInlineCloudAnalysisSettingsInput"></a>

```python
wildfire_inline_cloud_analysis_settings_input: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

---

##### `wildfire_realtime_lookup_duration_input`<sup>Optional</sup> <a name="wildfire_realtime_lookup_duration_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDurationInput"></a>

```python
wildfire_realtime_lookup_duration_input: str
```

- *Type:* str

---

##### `wildfire_realtime_lookup_timeout_action_input`<sup>Optional</sup> <a name="wildfire_realtime_lookup_timeout_action_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutActionInput"></a>

```python
wildfire_realtime_lookup_timeout_action_input: str
```

- *Type:* str

---

##### `wildfire_region_input`<sup>Optional</sup> <a name="wildfire_region_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegionInput"></a>

```python
wildfire_region_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `wildfire_realtime_lookup_duration`<sup>Required</sup> <a name="wildfire_realtime_lookup_duration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupDuration"></a>

```python
wildfire_realtime_lookup_duration: str
```

- *Type:* str

---

##### `wildfire_realtime_lookup_timeout_action`<sup>Required</sup> <a name="wildfire_realtime_lookup_timeout_action" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRealtimeLookupTimeoutAction"></a>

```python
wildfire_realtime_lookup_timeout_action: str
```

- *Type:* str

---

##### `wildfire_region`<sup>Required</sup> <a name="wildfire_region" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.wildfireRegion"></a>

```python
wildfire_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecurityFirewallEndpointWildfireSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettings">NetworkSecurityFirewallEndpointWildfireSettings</a>

---


### NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference <a name="NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_security_firewall_endpoint

networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetMaxAnalysisDuration">reset_max_analysis_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetSubmissionTimeoutLoggingDisabled">reset_submission_timeout_logging_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetTimeoutAction">reset_timeout_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_analysis_duration` <a name="reset_max_analysis_duration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetMaxAnalysisDuration"></a>

```python
def reset_max_analysis_duration() -> None
```

##### `reset_submission_timeout_logging_disabled` <a name="reset_submission_timeout_logging_disabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetSubmissionTimeoutLoggingDisabled"></a>

```python
def reset_submission_timeout_logging_disabled() -> None
```

##### `reset_timeout_action` <a name="reset_timeout_action" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.resetTimeoutAction"></a>

```python
def reset_timeout_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDurationInput">max_analysis_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabledInput">submission_timeout_logging_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutActionInput">timeout_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDuration">max_analysis_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabled">submission_timeout_logging_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutAction">timeout_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_analysis_duration_input`<sup>Optional</sup> <a name="max_analysis_duration_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDurationInput"></a>

```python
max_analysis_duration_input: str
```

- *Type:* str

---

##### `submission_timeout_logging_disabled_input`<sup>Optional</sup> <a name="submission_timeout_logging_disabled_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabledInput"></a>

```python
submission_timeout_logging_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeout_action_input`<sup>Optional</sup> <a name="timeout_action_input" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutActionInput"></a>

```python
timeout_action_input: str
```

- *Type:* str

---

##### `max_analysis_duration`<sup>Required</sup> <a name="max_analysis_duration" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.maxAnalysisDuration"></a>

```python
max_analysis_duration: str
```

- *Type:* str

---

##### `submission_timeout_logging_disabled`<sup>Required</sup> <a name="submission_timeout_logging_disabled" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.submissionTimeoutLoggingDisabled"></a>

```python
submission_timeout_logging_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeout_action`<sup>Required</sup> <a name="timeout_action" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettingsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings
```

- *Type:* <a href="#@cdktn/provider-google.networkSecurityFirewallEndpoint.NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings">NetworkSecurityFirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings</a>

---



