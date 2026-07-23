# `contactCenterInsightsQaScorecard` Submodule <a name="`contactCenterInsightsQaScorecard` Submodule" id="@cdktn/provider-google.contactCenterInsightsQaScorecard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsQaScorecard <a name="ContactCenterInsightsQaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard google_contact_center_insights_qa_scorecard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaScorecard(Construct Scope, string Id, ContactCenterInsightsQaScorecardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig">ContactCenterInsightsQaScorecardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig">ContactCenterInsightsQaScorecardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts"></a>

```csharp
private void PutTimeouts(ContactCenterInsightsQaScorecardTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetIsDefault"></a>

```csharp
private void ResetIsDefault()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsQaScorecard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaScorecard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaScorecard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaScorecard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaScorecard.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ContactCenterInsightsQaScorecard resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContactCenterInsightsQaScorecard to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContactCenterInsightsQaScorecard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsQaScorecard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference">ContactCenterInsightsQaScorecardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefaultInput">IsDefaultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardIdInput">QaScorecardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefault">IsDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardId">QaScorecardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeouts"></a>

```csharp
public ContactCenterInsightsQaScorecardTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference">ContactCenterInsightsQaScorecardTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefaultInput"></a>

```csharp
public bool|IResolvable IsDefaultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QaScorecardIdInput`<sup>Optional</sup> <a name="QaScorecardIdInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardIdInput"></a>

```csharp
public string QaScorecardIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.timeoutsInput"></a>

```csharp
public IResolvable|ContactCenterInsightsQaScorecardTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.isDefault"></a>

```csharp
public bool|IResolvable IsDefault { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `QaScorecardId`<sup>Required</sup> <a name="QaScorecardId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.qaScorecardId"></a>

```csharp
public string QaScorecardId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsQaScorecardConfig <a name="ContactCenterInsightsQaScorecardConfig" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaScorecardConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string QaScorecardId,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    bool|IResolvable IsDefault = null,
    string Project = null,
    string Source = null,
    ContactCenterInsightsQaScorecardTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.qaScorecardId">QaScorecardId</a></code> | <code>string</code> | A unique ID for the new QaScorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.description">Description</a></code> | <code>string</code> | A text description explaining the intent of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-specified display name of the scorecard. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.isDefault">IsDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the scorecard is the default one for the project. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.source">Source</a></code> | <code>string</code> | Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#location ContactCenterInsightsQaScorecard#location}

---

##### `QaScorecardId`<sup>Required</sup> <a name="QaScorecardId" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.qaScorecardId"></a>

```csharp
public string QaScorecardId { get; set; }
```

- *Type:* string

A unique ID for the new QaScorecard.

This ID will become the final
component of the QaScorecard's resource name. If no ID is specified, a
server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[a-z0-9-]{4,64}$'. Valid characters are 'a-z-'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#qa_scorecard_id ContactCenterInsightsQaScorecard#qa_scorecard_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#deletion_policy ContactCenterInsightsQaScorecard#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A text description explaining the intent of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#description ContactCenterInsightsQaScorecard#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-specified display name of the scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#display_name ContactCenterInsightsQaScorecard#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#id ContactCenterInsightsQaScorecard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.isDefault"></a>

```csharp
public bool|IResolvable IsDefault { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the scorecard is the default one for the project.

A default scorecard cannot be deleted and will always appear first in
scorecard selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#is_default ContactCenterInsightsQaScorecard#is_default}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#project ContactCenterInsightsQaScorecard#project}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Possible values: QA_SCORECARD_SOURCE_CUSTOMER_DEFINED QA_SCORECARD_SOURCE_DISCOVERY_ENGINE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#source ContactCenterInsightsQaScorecard#source}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardConfig.property.timeouts"></a>

```csharp
public ContactCenterInsightsQaScorecardTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#timeouts ContactCenterInsightsQaScorecard#timeouts}

---

### ContactCenterInsightsQaScorecardTimeouts <a name="ContactCenterInsightsQaScorecardTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaScorecardTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#create ContactCenterInsightsQaScorecard#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#delete ContactCenterInsightsQaScorecard#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#update ContactCenterInsightsQaScorecard#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#create ContactCenterInsightsQaScorecard#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#delete ContactCenterInsightsQaScorecard#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/contact_center_insights_qa_scorecard#update ContactCenterInsightsQaScorecard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsQaScorecardTimeoutsOutputReference <a name="ContactCenterInsightsQaScorecardTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaScorecardTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContactCenterInsightsQaScorecardTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecard.ContactCenterInsightsQaScorecardTimeouts">ContactCenterInsightsQaScorecardTimeouts</a>

---



