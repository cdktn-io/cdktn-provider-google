# `contactCenterInsightsQaScorecardRevision` Submodule <a name="`contactCenterInsightsQaScorecardRevision` Submodule" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsQaScorecardRevision <a name="ContactCenterInsightsQaScorecardRevision" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision google_contact_center_insights_qa_scorecard_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaScorecardRevision(Construct Scope, string Id, ContactCenterInsightsQaScorecardRevisionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig">ContactCenterInsightsQaScorecardRevisionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig">ContactCenterInsightsQaScorecardRevisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId">ResetQaScorecardRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.putTimeouts"></a>

```csharp
private void PutTimeouts(ContactCenterInsightsQaScorecardRevisionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetQaScorecardRevisionId` <a name="ResetQaScorecardRevisionId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId"></a>

```csharp
private void ResetQaScorecardRevisionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaScorecardRevision.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaScorecardRevision.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaScorecardRevision.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaScorecardRevision.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContactCenterInsightsQaScorecardRevision to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContactCenterInsightsQaScorecardRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsQaScorecardRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.alternateIds">AlternateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList">ContactCenterInsightsQaScorecardRevisionSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardInput">QaScorecardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput">QaScorecardRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecard">QaScorecard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId">QaScorecardRevisionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlternateIds`<sup>Required</sup> <a name="AlternateIds" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.alternateIds"></a>

```csharp
public string[] AlternateIds { get; }
```

- *Type:* string[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.snapshot"></a>

```csharp
public ContactCenterInsightsQaScorecardRevisionSnapshotList Snapshot { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList">ContactCenterInsightsQaScorecardRevisionSnapshotList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.timeouts"></a>

```csharp
public ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QaScorecardInput`<sup>Optional</sup> <a name="QaScorecardInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardInput"></a>

```csharp
public string QaScorecardInput { get; }
```

- *Type:* string

---

##### `QaScorecardRevisionIdInput`<sup>Optional</sup> <a name="QaScorecardRevisionIdInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput"></a>

```csharp
public string QaScorecardRevisionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.timeoutsInput"></a>

```csharp
public IResolvable|ContactCenterInsightsQaScorecardRevisionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecard"></a>

```csharp
public string QaScorecard { get; }
```

- *Type:* string

---

##### `QaScorecardRevisionId`<sup>Required</sup> <a name="QaScorecardRevisionId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId"></a>

```csharp
public string QaScorecardRevisionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevision.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsQaScorecardRevisionConfig <a name="ContactCenterInsightsQaScorecardRevisionConfig" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaScorecardRevisionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string QaScorecard,
    string Id = null,
    string Project = null,
    string QaScorecardRevisionId = null,
    ContactCenterInsightsQaScorecardRevisionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard">QaScorecard</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#id ContactCenterInsightsQaScorecardRevision#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#project ContactCenterInsightsQaScorecardRevision#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId">QaScorecardRevisionId</a></code> | <code>string</code> | A unique ID for the new QaScorecardRevision. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#location ContactCenterInsightsQaScorecardRevision#location}

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard"></a>

```csharp
public string QaScorecard { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#qa_scorecard ContactCenterInsightsQaScorecardRevision#qa_scorecard}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#id ContactCenterInsightsQaScorecardRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#project ContactCenterInsightsQaScorecardRevision#project}.

---

##### `QaScorecardRevisionId`<sup>Optional</sup> <a name="QaScorecardRevisionId" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId"></a>

```csharp
public string QaScorecardRevisionId { get; set; }
```

- *Type:* string

A unique ID for the new QaScorecardRevision.

This ID will become the final
component of the QaScorecardRevision's resource name.
If no ID is specified this resource will get the latest revision on the given scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#qa_scorecard_revision_id ContactCenterInsightsQaScorecardRevision#qa_scorecard_revision_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionConfig.property.timeouts"></a>

```csharp
public ContactCenterInsightsQaScorecardRevisionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#timeouts ContactCenterInsightsQaScorecardRevision#timeouts}

---

### ContactCenterInsightsQaScorecardRevisionSnapshot <a name="ContactCenterInsightsQaScorecardRevisionSnapshot" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaScorecardRevisionSnapshot {

};
```


### ContactCenterInsightsQaScorecardRevisionTimeouts <a name="ContactCenterInsightsQaScorecardRevisionTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaScorecardRevisionTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#create ContactCenterInsightsQaScorecardRevision#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#delete ContactCenterInsightsQaScorecardRevision#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#create ContactCenterInsightsQaScorecardRevision#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_scorecard_revision#delete ContactCenterInsightsQaScorecardRevision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsQaScorecardRevisionSnapshotList <a name="ContactCenterInsightsQaScorecardRevisionSnapshotList" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaScorecardRevisionSnapshotList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.get"></a>

```csharp
private ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference <a name="ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault">IsDefault</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshot">ContactCenterInsightsQaScorecardRevisionSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue"></a>

```csharp
public ContactCenterInsightsQaScorecardRevisionSnapshot InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionSnapshot">ContactCenterInsightsQaScorecardRevisionSnapshot</a>

---


### ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference <a name="ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContactCenterInsightsQaScorecardRevisionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaScorecardRevision.ContactCenterInsightsQaScorecardRevisionTimeouts">ContactCenterInsightsQaScorecardRevisionTimeouts</a>

---



