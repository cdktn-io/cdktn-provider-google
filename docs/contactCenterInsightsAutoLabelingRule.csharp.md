# `contactCenterInsightsAutoLabelingRule` Submodule <a name="`contactCenterInsightsAutoLabelingRule` Submodule" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAutoLabelingRule <a name="ContactCenterInsightsAutoLabelingRule" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule google_contact_center_insights_auto_labeling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsAutoLabelingRule(Construct Scope, string Id, ContactCenterInsightsAutoLabelingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig">ContactCenterInsightsAutoLabelingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig">ContactCenterInsightsAutoLabelingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId">ResetAutoLabelingRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKey">ResetLabelKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKeyType">ResetLabelKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions"></a>

```csharp
private void PutConditions(IResolvable|ContactCenterInsightsAutoLabelingRuleConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ContactCenterInsightsAutoLabelingRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetAutoLabelingRuleId` <a name="ResetAutoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId"></a>

```csharp
private void ResetAutoLabelingRuleId()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabelKey` <a name="ResetLabelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKey"></a>

```csharp
private void ResetLabelKey()
```

##### `ResetLabelKeyType` <a name="ResetLabelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetLabelKeyType"></a>

```csharp
private void ResetLabelKeyType()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsAutoLabelingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsAutoLabelingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsAutoLabelingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsAutoLabelingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContactCenterInsightsAutoLabelingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContactCenterInsightsAutoLabelingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAutoLabelingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList">ContactCenterInsightsAutoLabelingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.activeInput">ActiveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput">AutoLabelingRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyInput">LabelKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput">LabelKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.active">Active</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId">AutoLabelingRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKey">LabelKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyType">LabelKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditions"></a>

```csharp
public ContactCenterInsightsAutoLabelingRuleConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList">ContactCenterInsightsAutoLabelingRuleConditionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeouts"></a>

```csharp
public ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.activeInput"></a>

```csharp
public bool|IResolvable ActiveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoLabelingRuleIdInput`<sup>Optional</sup> <a name="AutoLabelingRuleIdInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput"></a>

```csharp
public string AutoLabelingRuleIdInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.conditionsInput"></a>

```csharp
public IResolvable|ContactCenterInsightsAutoLabelingRuleConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelKeyInput`<sup>Optional</sup> <a name="LabelKeyInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyInput"></a>

```csharp
public string LabelKeyInput { get; }
```

- *Type:* string

---

##### `LabelKeyTypeInput`<sup>Optional</sup> <a name="LabelKeyTypeInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput"></a>

```csharp
public string LabelKeyTypeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.timeoutsInput"></a>

```csharp
public IResolvable|ContactCenterInsightsAutoLabelingRuleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.active"></a>

```csharp
public bool|IResolvable Active { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoLabelingRuleId`<sup>Required</sup> <a name="AutoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId"></a>

```csharp
public string AutoLabelingRuleId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LabelKey`<sup>Required</sup> <a name="LabelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKey"></a>

```csharp
public string LabelKey { get; }
```

- *Type:* string

---

##### `LabelKeyType`<sup>Required</sup> <a name="LabelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.labelKeyType"></a>

```csharp
public string LabelKeyType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAutoLabelingRuleConditions <a name="ContactCenterInsightsAutoLabelingRuleConditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsAutoLabelingRuleConditions {
    string Condition = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.condition">Condition</a></code> | <code>string</code> | A optional CEL expression to be evaluated as a boolean value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.value">Value</a></code> | <code>string</code> | CEL expression to be evaluated as the value. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

A optional CEL expression to be evaluated as a boolean value.

Once evaluated as true, then we will proceed with the value evaluation.
An empty condition will be auto evaluated as true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#condition ContactCenterInsightsAutoLabelingRule#condition}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

CEL expression to be evaluated as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#value ContactCenterInsightsAutoLabelingRule#value}

---

### ContactCenterInsightsAutoLabelingRuleConfig <a name="ContactCenterInsightsAutoLabelingRuleConfig" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsAutoLabelingRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    bool|IResolvable Active = null,
    string AutoLabelingRuleId = null,
    IResolvable|ContactCenterInsightsAutoLabelingRuleConditions[] Conditions = null,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string LabelKey = null,
    string LabelKeyType = null,
    string Project = null,
    ContactCenterInsightsAutoLabelingRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.location">Location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.active">Active</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId">AutoLabelingRuleId</a></code> | <code>string</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.description">Description</a></code> | <code>string</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKey">LabelKey</a></code> | <code>string</code> | The label key. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType">LabelKeyType</a></code> | <code>string</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#location ContactCenterInsightsAutoLabelingRule#location}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.active"></a>

```csharp
public bool|IResolvable Active { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#active ContactCenterInsightsAutoLabelingRule#active}

---

##### `AutoLabelingRuleId`<sup>Optional</sup> <a name="AutoLabelingRuleId" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId"></a>

```csharp
public string AutoLabelingRuleId { get; set; }
```

- *Type:* string

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#auto_labeling_rule_id ContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.conditions"></a>

```csharp
public IResolvable|ContactCenterInsightsAutoLabelingRuleConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#conditions ContactCenterInsightsAutoLabelingRule#conditions}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#deletion_policy ContactCenterInsightsAutoLabelingRule#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#description ContactCenterInsightsAutoLabelingRule#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#display_name ContactCenterInsightsAutoLabelingRule#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#id ContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LabelKey`<sup>Optional</sup> <a name="LabelKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKey"></a>

```csharp
public string LabelKey { get; set; }
```

- *Type:* string

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key ContactCenterInsightsAutoLabelingRule#label_key}

---

##### `LabelKeyType`<sup>Optional</sup> <a name="LabelKeyType" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType"></a>

```csharp
public string LabelKeyType { get; set; }
```

- *Type:* string

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#label_key_type ContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#project ContactCenterInsightsAutoLabelingRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConfig.property.timeouts"></a>

```csharp
public ContactCenterInsightsAutoLabelingRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#timeouts ContactCenterInsightsAutoLabelingRule#timeouts}

---

### ContactCenterInsightsAutoLabelingRuleTimeouts <a name="ContactCenterInsightsAutoLabelingRuleTimeouts" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsAutoLabelingRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#create ContactCenterInsightsAutoLabelingRule#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#delete ContactCenterInsightsAutoLabelingRule#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#update ContactCenterInsightsAutoLabelingRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#create ContactCenterInsightsAutoLabelingRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#delete ContactCenterInsightsAutoLabelingRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/contact_center_insights_auto_labeling_rule#update ContactCenterInsightsAutoLabelingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAutoLabelingRuleConditionsList <a name="ContactCenterInsightsAutoLabelingRuleConditionsList" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsAutoLabelingRuleConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get"></a>

```csharp
private ContactCenterInsightsAutoLabelingRuleConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue"></a>

```csharp
public IResolvable|ContactCenterInsightsAutoLabelingRuleConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>[]

---


### ContactCenterInsightsAutoLabelingRuleConditionsOutputReference <a name="ContactCenterInsightsAutoLabelingRuleConditionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsAutoLabelingRuleConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContactCenterInsightsAutoLabelingRuleConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleConditions">ContactCenterInsightsAutoLabelingRuleConditions</a>

---


### ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference <a name="ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContactCenterInsightsAutoLabelingRuleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsAutoLabelingRule.ContactCenterInsightsAutoLabelingRuleTimeouts">ContactCenterInsightsAutoLabelingRuleTimeouts</a>

---



