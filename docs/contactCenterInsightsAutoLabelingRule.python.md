# `contactCenterInsightsAutoLabelingRule` Submodule <a name="`contactCenterInsightsAutoLabelingRule` Submodule" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAutoLabelingRule <a name="ContactCenterInsightsAutoLabelingRule" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule google_contact_center_insights_auto_labeling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_auto_labeling_rule

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule(
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
  active: bool | IResolvable = None,
  auto_labeling_rule_id: str = None,
  conditions: IResolvable | typing.List[ContactCenterInsightsAutoLabelingRuleConditions] = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  label_key: str = None,
  label_key_type: str = None,
  project: str = None,
  timeouts: ContactCenterInsightsAutoLabelingRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.autoLabelingRuleId">auto_labeling_rule_id</a></code> | <code>str</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKey">label_key</a></code> | <code>str</code> | The label key. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKeyType">label_key_type</a></code> | <code>str</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.location"></a>

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#location ContactCenterInsightsAutoLabelingRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.active"></a>

- *Type:* bool | cdktn.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#active ContactCenterInsightsAutoLabelingRule#active}

---

##### `auto_labeling_rule_id`<sup>Optional</sup> <a name="auto_labeling_rule_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.autoLabelingRuleId"></a>

- *Type:* str

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#auto_labeling_rule_id ContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#conditions ContactCenterInsightsAutoLabelingRule#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.description"></a>

- *Type:* str

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#description ContactCenterInsightsAutoLabelingRule#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.displayName"></a>

- *Type:* str

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#display_name ContactCenterInsightsAutoLabelingRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label_key`<sup>Optional</sup> <a name="label_key" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKey"></a>

- *Type:* str

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key ContactCenterInsightsAutoLabelingRule#label_key}

---

##### `label_key_type`<sup>Optional</sup> <a name="label_key_type" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKeyType"></a>

- *Type:* str

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key_type ContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#timeouts ContactCenterInsightsAutoLabelingRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId">reset_auto_labeling_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKey">reset_label_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKeyType">reset_label_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[ContactCenterInsightsAutoLabelingRuleConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#create ContactCenterInsightsAutoLabelingRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#delete ContactCenterInsightsAutoLabelingRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#update ContactCenterInsightsAutoLabelingRule#update}.

---

##### `reset_active` <a name="reset_active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_auto_labeling_rule_id` <a name="reset_auto_labeling_rule_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId"></a>

```python
def reset_auto_labeling_rule_id() -> None
```

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_label_key` <a name="reset_label_key" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKey"></a>

```python
def reset_label_key() -> None
```

##### `reset_label_key_type` <a name="reset_label_key_type" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKeyType"></a>

```python
def reset_label_key_type() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct"></a>

```python
from cdktn_provider_google import contact_center_insights_auto_labeling_rule

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement"></a>

```python
from cdktn_provider_google import contact_center_insights_auto_labeling_rule

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource"></a>

```python
from cdktn_provider_google import contact_center_insights_auto_labeling_rule

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport"></a>

```python
from cdktn_provider_google import contact_center_insights_auto_labeling_rule

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContactCenterInsightsAutoLabelingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContactCenterInsightsAutoLabelingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAutoLabelingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList">ContactCenterInsightsAutoLabelingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.activeInput">active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput">auto_labeling_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyInput">label_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput">label_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId">auto_labeling_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKey">label_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyType">label_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditions"></a>

```python
conditions: ContactCenterInsightsAutoLabelingRuleConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList">ContactCenterInsightsAutoLabelingRuleConditionsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeouts"></a>

```python
timeouts: ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.activeInput"></a>

```python
active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_labeling_rule_id_input`<sup>Optional</sup> <a name="auto_labeling_rule_id_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput"></a>

```python
auto_labeling_rule_id_input: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[ContactCenterInsightsAutoLabelingRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_key_input`<sup>Optional</sup> <a name="label_key_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyInput"></a>

```python
label_key_input: str
```

- *Type:* str

---

##### `label_key_type_input`<sup>Optional</sup> <a name="label_key_type_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput"></a>

```python
label_key_type_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ContactCenterInsightsAutoLabelingRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_labeling_rule_id`<sup>Required</sup> <a name="auto_labeling_rule_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId"></a>

```python
auto_labeling_rule_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label_key`<sup>Required</sup> <a name="label_key" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKey"></a>

```python
label_key: str
```

- *Type:* str

---

##### `label_key_type`<sup>Required</sup> <a name="label_key_type" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyType"></a>

```python
label_key_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAutoLabelingRuleConditions <a name="ContactCenterInsightsAutoLabelingRuleConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_auto_labeling_rule

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions(
  condition: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.condition">condition</a></code> | <code>str</code> | A optional CEL expression to be evaluated as a boolean value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.value">value</a></code> | <code>str</code> | CEL expression to be evaluated as the value. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.condition"></a>

```python
condition: str
```

- *Type:* str

A optional CEL expression to be evaluated as a boolean value.

Once evaluated as true, then we will proceed with the value evaluation.
An empty condition will be auto evaluated as true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#condition ContactCenterInsightsAutoLabelingRule#condition}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.value"></a>

```python
value: str
```

- *Type:* str

CEL expression to be evaluated as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#value ContactCenterInsightsAutoLabelingRule#value}

---

### ContactCenterInsightsAutoLabelingRuleConfig <a name="ContactCenterInsightsAutoLabelingRuleConfig" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_auto_labeling_rule

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  active: bool | IResolvable = None,
  auto_labeling_rule_id: str = None,
  conditions: IResolvable | typing.List[ContactCenterInsightsAutoLabelingRuleConditions] = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  label_key: str = None,
  label_key_type: str = None,
  project: str = None,
  timeouts: ContactCenterInsightsAutoLabelingRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId">auto_labeling_rule_id</a></code> | <code>str</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.description">description</a></code> | <code>str</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.displayName">display_name</a></code> | <code>str</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKey">label_key</a></code> | <code>str</code> | The label key. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType">label_key_type</a></code> | <code>str</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#location ContactCenterInsightsAutoLabelingRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#active ContactCenterInsightsAutoLabelingRule#active}

---

##### `auto_labeling_rule_id`<sup>Optional</sup> <a name="auto_labeling_rule_id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId"></a>

```python
auto_labeling_rule_id: str
```

- *Type:* str

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#auto_labeling_rule_id ContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.conditions"></a>

```python
conditions: IResolvable | typing.List[ContactCenterInsightsAutoLabelingRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#conditions ContactCenterInsightsAutoLabelingRule#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#description ContactCenterInsightsAutoLabelingRule#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#display_name ContactCenterInsightsAutoLabelingRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label_key`<sup>Optional</sup> <a name="label_key" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKey"></a>

```python
label_key: str
```

- *Type:* str

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key ContactCenterInsightsAutoLabelingRule#label_key}

---

##### `label_key_type`<sup>Optional</sup> <a name="label_key_type" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType"></a>

```python
label_key_type: str
```

- *Type:* str

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key_type ContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.timeouts"></a>

```python
timeouts: ContactCenterInsightsAutoLabelingRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#timeouts ContactCenterInsightsAutoLabelingRule#timeouts}

---

### ContactCenterInsightsAutoLabelingRuleTimeouts <a name="ContactCenterInsightsAutoLabelingRuleTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_auto_labeling_rule

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#create ContactCenterInsightsAutoLabelingRule#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#delete ContactCenterInsightsAutoLabelingRule#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#update ContactCenterInsightsAutoLabelingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#create ContactCenterInsightsAutoLabelingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#delete ContactCenterInsightsAutoLabelingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/contact_center_insights_auto_labeling_rule#update ContactCenterInsightsAutoLabelingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAutoLabelingRuleConditionsList <a name="ContactCenterInsightsAutoLabelingRuleConditionsList" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_auto_labeling_rule

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContactCenterInsightsAutoLabelingRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ContactCenterInsightsAutoLabelingRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>]

---


### ContactCenterInsightsAutoLabelingRuleConditionsOutputReference <a name="ContactCenterInsightsAutoLabelingRuleConditionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_auto_labeling_rule

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ContactCenterInsightsAutoLabelingRuleConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>

---


### ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference <a name="ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import contact_center_insights_auto_labeling_rule

contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ContactCenterInsightsAutoLabelingRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---



