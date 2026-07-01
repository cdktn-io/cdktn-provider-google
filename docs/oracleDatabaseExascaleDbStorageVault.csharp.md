# `oracleDatabaseExascaleDbStorageVault` Submodule <a name="`oracleDatabaseExascaleDbStorageVault` Submodule" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseExascaleDbStorageVault <a name="OracleDatabaseExascaleDbStorageVault" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault google_oracle_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExascaleDbStorageVault(Construct Scope, string Id, OracleDatabaseExascaleDbStorageVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig">OracleDatabaseExascaleDbStorageVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig">OracleDatabaseExascaleDbStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putProperties"></a>

```csharp
private void PutProperties(OracleDatabaseExascaleDbStorageVaultProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putTimeouts"></a>

```csharp
private void PutTimeouts(OracleDatabaseExascaleDbStorageVaultTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetGcpOracleZone"></a>

```csharp
private void ResetGcpOracleZone()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseExascaleDbStorageVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseExascaleDbStorageVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseExascaleDbStorageVault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseExascaleDbStorageVault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseExascaleDbStorageVault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput">ExascaleDbStorageVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.properties"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeouts"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="ExascaleDbStorageVaultIdInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput"></a>

```csharp
public string ExascaleDbStorageVaultIdInput { get; }
```

- *Type:* string

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput"></a>

```csharp
public string GcpOracleZoneInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.propertiesInput"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeoutsInput"></a>

```csharp
public IResolvable|OracleDatabaseExascaleDbStorageVaultTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId"></a>

```csharp
public string ExascaleDbStorageVaultId { get; }
```

- *Type:* string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseExascaleDbStorageVaultConfig <a name="OracleDatabaseExascaleDbStorageVaultConfig" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExascaleDbStorageVaultConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string ExascaleDbStorageVaultId,
    string Location,
    OracleDatabaseExascaleDbStorageVaultProperties Properties,
    string DeletionPolicy = null,
    bool|IResolvable DeletionProtection = null,
    string GcpOracleZone = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    OracleDatabaseExascaleDbStorageVaultTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>string</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels or tags associated with the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#project OracleDatabaseExascaleDbStorageVault#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the ExascaleDbStorageVault.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#display_name OracleDatabaseExascaleDbStorageVault#display_name}

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId"></a>

```csharp
public string ExascaleDbStorageVaultId { get; set; }
```

- *Type:* string

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id OracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#location OracleDatabaseExascaleDbStorageVault#location}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.properties"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#properties OracleDatabaseExascaleDbStorageVault#properties}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#deletion_policy OracleDatabaseExascaleDbStorageVault#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#deletion_protection OracleDatabaseExascaleDbStorageVault#deletion_protection}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; set; }
```

- *Type:* string

The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#gcp_oracle_zone OracleDatabaseExascaleDbStorageVault#gcp_oracle_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels or tags associated with the ExascaleDbStorageVault.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#labels OracleDatabaseExascaleDbStorageVault#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#project OracleDatabaseExascaleDbStorageVault#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.timeouts"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#timeouts OracleDatabaseExascaleDbStorageVault#timeouts}

---

### OracleDatabaseExascaleDbStorageVaultProperties <a name="OracleDatabaseExascaleDbStorageVaultProperties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExascaleDbStorageVaultProperties {
    OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails ExascaleDbStorageDetails,
    double AdditionalFlashCachePercent = null,
    OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails">ExascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | exascale_db_storage_details block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent">AdditionalFlashCachePercent</a></code> | <code>double</code> | The size of additional flash cache in percentage of high capacity database storage. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | time_zone block. |

---

##### `ExascaleDbStorageDetails`<sup>Required</sup> <a name="ExascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails ExascaleDbStorageDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

exascale_db_storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#exascale_db_storage_details OracleDatabaseExascaleDbStorageVault#exascale_db_storage_details}

---

##### `AdditionalFlashCachePercent`<sup>Optional</sup> <a name="AdditionalFlashCachePercent" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent"></a>

```csharp
public double AdditionalFlashCachePercent { get; set; }
```

- *Type:* double

The size of additional flash cache in percentage of high capacity database storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#additional_flash_cache_percent OracleDatabaseExascaleDbStorageVault#additional_flash_cache_percent}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.timeZone"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone TimeZone { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#time_zone OracleDatabaseExascaleDbStorageVault#time_zone}

---

### OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails <a name="OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails {
    double TotalSizeGbs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs">TotalSizeGbs</a></code> | <code>double</code> | The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB). |

---

##### `TotalSizeGbs`<sup>Required</sup> <a name="TotalSizeGbs" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs"></a>

```csharp
public double TotalSizeGbs { get; set; }
```

- *Type:* double

The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#total_size_gbs OracleDatabaseExascaleDbStorageVault#total_size_gbs}

---

### OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone <a name="OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone {
    string Id = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id">Id</a></code> | <code>string</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version">Version</a></code> | <code>string</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#version OracleDatabaseExascaleDbStorageVault#version}

---

### OracleDatabaseExascaleDbStorageVaultTimeouts <a name="OracleDatabaseExascaleDbStorageVaultTimeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExascaleDbStorageVaultTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#create OracleDatabaseExascaleDbStorageVault#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#delete OracleDatabaseExascaleDbStorageVault#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#update OracleDatabaseExascaleDbStorageVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#create OracleDatabaseExascaleDbStorageVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#delete OracleDatabaseExascaleDbStorageVault#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/oracle_database_exascale_db_storage_vault#update OracleDatabaseExascaleDbStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference <a name="OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">AvailableSizeGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput">TotalSizeGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">TotalSizeGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableSizeGbs`<sup>Required</sup> <a name="AvailableSizeGbs" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```csharp
public double AvailableSizeGbs { get; }
```

- *Type:* double

---

##### `TotalSizeGbsInput`<sup>Optional</sup> <a name="TotalSizeGbsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput"></a>

```csharp
public double TotalSizeGbsInput { get; }
```

- *Type:* double

---

##### `TotalSizeGbs`<sup>Required</sup> <a name="TotalSizeGbs" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```csharp
public double TotalSizeGbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---


### OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference <a name="OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails">PutExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent">ResetAdditionalFlashCachePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExascaleDbStorageDetails` <a name="PutExascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails"></a>

```csharp
private void PutExascaleDbStorageDetails(OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone"></a>

```csharp
private void PutTimeZone(OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `ResetAdditionalFlashCachePercent` <a name="ResetAdditionalFlashCachePercent" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent"></a>

```csharp
private void ResetAdditionalFlashCachePercent()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes">AttachedShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes">AvailableShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails">ExascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri">OciUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount">VmClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds">VmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput">AdditionalFlashCachePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput">ExascaleDbStorageDetailsInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent">AdditionalFlashCachePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachedShapeAttributes`<sup>Required</sup> <a name="AttachedShapeAttributes" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes"></a>

```csharp
public string[] AttachedShapeAttributes { get; }
```

- *Type:* string[]

---

##### `AvailableShapeAttributes`<sup>Required</sup> <a name="AvailableShapeAttributes" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes"></a>

```csharp
public string[] AvailableShapeAttributes { get; }
```

- *Type:* string[]

---

##### `ExascaleDbStorageDetails`<sup>Required</sup> <a name="ExascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference ExascaleDbStorageDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUri`<sup>Required</sup> <a name="OciUri" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri"></a>

```csharp
public string OciUri { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference TimeZone { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a>

---

##### `VmClusterCount`<sup>Required</sup> <a name="VmClusterCount" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount"></a>

```csharp
public double VmClusterCount { get; }
```

- *Type:* double

---

##### `VmClusterIds`<sup>Required</sup> <a name="VmClusterIds" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds"></a>

```csharp
public string[] VmClusterIds { get; }
```

- *Type:* string[]

---

##### `AdditionalFlashCachePercentInput`<sup>Optional</sup> <a name="AdditionalFlashCachePercentInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput"></a>

```csharp
public double AdditionalFlashCachePercentInput { get; }
```

- *Type:* double

---

##### `ExascaleDbStorageDetailsInput`<sup>Optional</sup> <a name="ExascaleDbStorageDetailsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails ExascaleDbStorageDetailsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone TimeZoneInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `AdditionalFlashCachePercent`<sup>Required</sup> <a name="AdditionalFlashCachePercent" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```csharp
public double AdditionalFlashCachePercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

---


### OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference <a name="OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---


### OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference <a name="OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OracleDatabaseExascaleDbStorageVaultTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

---



