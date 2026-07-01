# `oracleDatabaseGoldengateConnectionAssignment` Submodule <a name="`oracleDatabaseGoldengateConnectionAssignment` Submodule" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseGoldengateConnectionAssignment <a name="OracleDatabaseGoldengateConnectionAssignment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment google_oracle_database_goldengate_connection_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseGoldengateConnectionAssignment(Construct Scope, string Id, OracleDatabaseGoldengateConnectionAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig">OracleDatabaseGoldengateConnectionAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig">OracleDatabaseGoldengateConnectionAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties"></a>

```csharp
private void PutProperties(OracleDatabaseGoldengateConnectionAssignmentProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts"></a>

```csharp
private void PutTimeouts(OracleDatabaseGoldengateConnectionAssignmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseGoldengateConnectionAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseGoldengateConnectionAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseGoldengateConnectionAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseGoldengateConnectionAssignment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseGoldengateConnectionAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OracleDatabaseGoldengateConnectionAssignment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseGoldengateConnectionAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseGoldengateConnectionAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseGoldengateConnectionAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference">OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference">OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentIdInput">GoldengateConnectionAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentId">GoldengateConnectionAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.properties"></a>

```csharp
public OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference">OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeouts"></a>

```csharp
public OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference">OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GoldengateConnectionAssignmentIdInput`<sup>Optional</sup> <a name="GoldengateConnectionAssignmentIdInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentIdInput"></a>

```csharp
public string GoldengateConnectionAssignmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.propertiesInput"></a>

```csharp
public OracleDatabaseGoldengateConnectionAssignmentProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeoutsInput"></a>

```csharp
public IResolvable|OracleDatabaseGoldengateConnectionAssignmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GoldengateConnectionAssignmentId`<sup>Required</sup> <a name="GoldengateConnectionAssignmentId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentId"></a>

```csharp
public string GoldengateConnectionAssignmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseGoldengateConnectionAssignmentConfig <a name="OracleDatabaseGoldengateConnectionAssignmentConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseGoldengateConnectionAssignmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GoldengateConnectionAssignmentId,
    string Location,
    OracleDatabaseGoldengateConnectionAssignmentProperties Properties,
    string DeletionPolicy = null,
    bool|IResolvable DeletionProtection = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    OracleDatabaseGoldengateConnectionAssignmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.goldengateConnectionAssignmentId">GoldengateConnectionAssignmentId</a></code> | <code>string</code> | The ID of the GoldengateConnectionAssignment to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#id OracleDatabaseGoldengateConnectionAssignment#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels or tags associated with the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#project OracleDatabaseGoldengateConnectionAssignment#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GoldengateConnectionAssignmentId`<sup>Required</sup> <a name="GoldengateConnectionAssignmentId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.goldengateConnectionAssignmentId"></a>

```csharp
public string GoldengateConnectionAssignmentId { get; set; }
```

- *Type:* string

The ID of the GoldengateConnectionAssignment to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_connection_assignment_id OracleDatabaseGoldengateConnectionAssignment#goldengate_connection_assignment_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#location OracleDatabaseGoldengateConnectionAssignment#location}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.properties"></a>

```csharp
public OracleDatabaseGoldengateConnectionAssignmentProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#properties OracleDatabaseGoldengateConnectionAssignment#properties}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#deletion_policy OracleDatabaseGoldengateConnectionAssignment#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#deletion_protection OracleDatabaseGoldengateConnectionAssignment#deletion_protection}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the GoldengateConnectionAssignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#display_name OracleDatabaseGoldengateConnectionAssignment#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#id OracleDatabaseGoldengateConnectionAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels or tags associated with the GoldengateConnectionAssignment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#labels OracleDatabaseGoldengateConnectionAssignment#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#project OracleDatabaseGoldengateConnectionAssignment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.timeouts"></a>

```csharp
public OracleDatabaseGoldengateConnectionAssignmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#timeouts OracleDatabaseGoldengateConnectionAssignment#timeouts}

---

### OracleDatabaseGoldengateConnectionAssignmentProperties <a name="OracleDatabaseGoldengateConnectionAssignmentProperties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseGoldengateConnectionAssignmentProperties {
    string GoldengateConnection,
    string GoldengateDeployment
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateConnection">GoldengateConnection</a></code> | <code>string</code> | The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateDeployment">GoldengateDeployment</a></code> | <code>string</code> | The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}. |

---

##### `GoldengateConnection`<sup>Required</sup> <a name="GoldengateConnection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateConnection"></a>

```csharp
public string GoldengateConnection { get; set; }
```

- *Type:* string

The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_connection OracleDatabaseGoldengateConnectionAssignment#goldengate_connection}

---

##### `GoldengateDeployment`<sup>Required</sup> <a name="GoldengateDeployment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateDeployment"></a>

```csharp
public string GoldengateDeployment { get; set; }
```

- *Type:* string

The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_deployment OracleDatabaseGoldengateConnectionAssignment#goldengate_deployment}

---

### OracleDatabaseGoldengateConnectionAssignmentTimeouts <a name="OracleDatabaseGoldengateConnectionAssignmentTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseGoldengateConnectionAssignmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#create OracleDatabaseGoldengateConnectionAssignment#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#delete OracleDatabaseGoldengateConnectionAssignment#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#update OracleDatabaseGoldengateConnectionAssignment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#create OracleDatabaseGoldengateConnectionAssignment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#delete OracleDatabaseGoldengateConnectionAssignment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_goldengate_connection_assignment#update OracleDatabaseGoldengateConnectionAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference <a name="OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnectionInput">GoldengateConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeploymentInput">GoldengateDeploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnection">GoldengateConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeployment">GoldengateDeployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `GoldengateConnectionInput`<sup>Optional</sup> <a name="GoldengateConnectionInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnectionInput"></a>

```csharp
public string GoldengateConnectionInput { get; }
```

- *Type:* string

---

##### `GoldengateDeploymentInput`<sup>Optional</sup> <a name="GoldengateDeploymentInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeploymentInput"></a>

```csharp
public string GoldengateDeploymentInput { get; }
```

- *Type:* string

---

##### `GoldengateConnection`<sup>Required</sup> <a name="GoldengateConnection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnection"></a>

```csharp
public string GoldengateConnection { get; }
```

- *Type:* string

---

##### `GoldengateDeployment`<sup>Required</sup> <a name="GoldengateDeployment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeployment"></a>

```csharp
public string GoldengateDeployment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseGoldengateConnectionAssignmentProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

---


### OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference <a name="OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OracleDatabaseGoldengateConnectionAssignmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---



