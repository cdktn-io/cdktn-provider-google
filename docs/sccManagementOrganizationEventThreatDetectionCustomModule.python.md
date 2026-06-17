# `sccManagementOrganizationEventThreatDetectionCustomModule` Submodule <a name="`sccManagementOrganizationEventThreatDetectionCustomModule` Submodule" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccManagementOrganizationEventThreatDetectionCustomModule <a name="SccManagementOrganizationEventThreatDetectionCustomModule" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module google_scc_management_organization_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer"></a>

```python
from cdktn_provider_google import scc_management_organization_event_threat_detection_custom_module

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  organization: str,
  config: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  timeouts: SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config">config</a></code> | <code>str</code> | Config for the module. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.enablementState">enablement_state</a></code> | <code>str</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#id SccManagementOrganizationEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.location">location</a></code> | <code>str</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.type">type</a></code> | <code>str</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.organization"></a>

- *Type:* str

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#organization SccManagementOrganizationEventThreatDetectionCustomModule#organization}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* str

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#config SccManagementOrganizationEventThreatDetectionCustomModule#config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#deletion_policy SccManagementOrganizationEventThreatDetectionCustomModule#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.displayName"></a>

- *Type:* str

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#display_name SccManagementOrganizationEventThreatDetectionCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* str

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#enablement_state SccManagementOrganizationEventThreatDetectionCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#id SccManagementOrganizationEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.location"></a>

- *Type:* str

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#location SccManagementOrganizationEventThreatDetectionCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#timeouts SccManagementOrganizationEventThreatDetectionCustomModule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.type"></a>

- *Type:* str

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#type SccManagementOrganizationEventThreatDetectionCustomModule#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState">reset_enablement_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#create SccManagementOrganizationEventThreatDetectionCustomModule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#delete SccManagementOrganizationEventThreatDetectionCustomModule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#update SccManagementOrganizationEventThreatDetectionCustomModule#update}.

---

##### `reset_config` <a name="reset_config" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enablement_state` <a name="reset_enablement_state" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState"></a>

```python
def reset_enablement_state() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isConstruct"></a>

```python
from cdktn_provider_google import scc_management_organization_event_threat_detection_custom_module

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement"></a>

```python
from cdktn_provider_google import scc_management_organization_event_threat_detection_custom_module

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource"></a>

```python
from cdktn_provider_google import scc_management_organization_event_threat_detection_custom_module

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport"></a>

```python
from cdktn_provider_google import scc_management_organization_event_threat_detection_custom_module

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SccManagementOrganizationEventThreatDetectionCustomModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SccManagementOrganizationEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SccManagementOrganizationEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.configInput">config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput">enablement_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.config">config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts"></a>

```python
timeouts: SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.configInput"></a>

```python
config_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enablement_state_input`<sup>Optional</sup> <a name="enablement_state_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```python
enablement_state_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.config"></a>

```python
config: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SccManagementOrganizationEventThreatDetectionCustomModuleConfig <a name="SccManagementOrganizationEventThreatDetectionCustomModuleConfig" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.Initializer"></a>

```python
from cdktn_provider_google import scc_management_organization_event_threat_detection_custom_module

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  organization: str,
  config: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  enablement_state: str = None,
  id: str = None,
  location: str = None,
  timeouts: SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization">organization</a></code> | <code>str</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config">config</a></code> | <code>str</code> | Config for the module. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName">display_name</a></code> | <code>str</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState">enablement_state</a></code> | <code>str</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#id SccManagementOrganizationEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location">location</a></code> | <code>str</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type">type</a></code> | <code>str</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#organization SccManagementOrganizationEventThreatDetectionCustomModule#organization}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config"></a>

```python
config: str
```

- *Type:* str

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#config SccManagementOrganizationEventThreatDetectionCustomModule#config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#deletion_policy SccManagementOrganizationEventThreatDetectionCustomModule#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#display_name SccManagementOrganizationEventThreatDetectionCustomModule#display_name}

---

##### `enablement_state`<sup>Optional</sup> <a name="enablement_state" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#enablement_state SccManagementOrganizationEventThreatDetectionCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#id SccManagementOrganizationEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#location SccManagementOrganizationEventThreatDetectionCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```python
timeouts: SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#timeouts SccManagementOrganizationEventThreatDetectionCustomModule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#type SccManagementOrganizationEventThreatDetectionCustomModule#type}

---

### SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts <a name="SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```python
from cdktn_provider_google import scc_management_organization_event_threat_detection_custom_module

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#create SccManagementOrganizationEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#delete SccManagementOrganizationEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#update SccManagementOrganizationEventThreatDetectionCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#create SccManagementOrganizationEventThreatDetectionCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#delete SccManagementOrganizationEventThreatDetectionCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/scc_management_organization_event_threat_detection_custom_module#update SccManagementOrganizationEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import scc_management_organization_event_threat_detection_custom_module

sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.sccManagementOrganizationEventThreatDetectionCustomModule.SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">SccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---



