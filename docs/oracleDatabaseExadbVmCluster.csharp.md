# `oracleDatabaseExadbVmCluster` Submodule <a name="`oracleDatabaseExadbVmCluster` Submodule" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseExadbVmCluster <a name="OracleDatabaseExadbVmCluster" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster google_oracle_database_exadb_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmCluster(Construct Scope, string Id, OracleDatabaseExadbVmClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig">OracleDatabaseExadbVmClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig">OracleDatabaseExadbVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOdbNetwork">ResetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties"></a>

```csharp
private void PutProperties(OracleDatabaseExadbVmClusterProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(OracleDatabaseExadbVmClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetOdbNetwork` <a name="ResetOdbNetwork" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOdbNetwork"></a>

```csharp
private void ResetOdbNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseExadbVmCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseExadbVmCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseExadbVmCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

OracleDatabaseExadbVmCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseExadbVmCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseExadbVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseExadbVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.identityConnector">IdentityConnector</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList">OracleDatabaseExadbVmClusterIdentityConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference">OracleDatabaseExadbVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference">OracleDatabaseExadbVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnetInput">BackupOdbSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput">ExadbVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetworkInput">OdbNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnetInput">OdbSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnet">BackupOdbSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterId">ExadbVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetwork">OdbNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnet">OdbSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `IdentityConnector`<sup>Required</sup> <a name="IdentityConnector" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.identityConnector"></a>

```csharp
public OracleDatabaseExadbVmClusterIdentityConnectorList IdentityConnector { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList">OracleDatabaseExadbVmClusterIdentityConnectorList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.properties"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference">OracleDatabaseExadbVmClusterPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeouts"></a>

```csharp
public OracleDatabaseExadbVmClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference">OracleDatabaseExadbVmClusterTimeoutsOutputReference</a>

---

##### `BackupOdbSubnetInput`<sup>Optional</sup> <a name="BackupOdbSubnetInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnetInput"></a>

```csharp
public string BackupOdbSubnetInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExadbVmClusterIdInput`<sup>Optional</sup> <a name="ExadbVmClusterIdInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput"></a>

```csharp
public string ExadbVmClusterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OdbNetworkInput`<sup>Optional</sup> <a name="OdbNetworkInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetworkInput"></a>

```csharp
public string OdbNetworkInput { get; }
```

- *Type:* string

---

##### `OdbSubnetInput`<sup>Optional</sup> <a name="OdbSubnetInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnetInput"></a>

```csharp
public string OdbSubnetInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.propertiesInput"></a>

```csharp
public OracleDatabaseExadbVmClusterProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeoutsInput"></a>

```csharp
public IResolvable|OracleDatabaseExadbVmClusterTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

---

##### `BackupOdbSubnet`<sup>Required</sup> <a name="BackupOdbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnet"></a>

```csharp
public string BackupOdbSubnet { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExadbVmClusterId`<sup>Required</sup> <a name="ExadbVmClusterId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterId"></a>

```csharp
public string ExadbVmClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OdbNetwork`<sup>Required</sup> <a name="OdbNetwork" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetwork"></a>

```csharp
public string OdbNetwork { get; }
```

- *Type:* string

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnet"></a>

```csharp
public string OdbSubnet { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseExadbVmClusterConfig <a name="OracleDatabaseExadbVmClusterConfig" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BackupOdbSubnet,
    string DisplayName,
    string ExadbVmClusterId,
    string Location,
    string OdbSubnet,
    OracleDatabaseExadbVmClusterProperties Properties,
    string DeletionPolicy = null,
    bool|IResolvable DeletionProtection = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string OdbNetwork = null,
    string Project = null,
    OracleDatabaseExadbVmClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet">BackupOdbSubnet</a></code> | <code>string</code> | The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId">ExadbVmClusterId</a></code> | <code>string</code> | The ID of the ExadbVmCluster to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbSubnet">OdbSubnet</a></code> | <code>string</code> | The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels or tags associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbNetwork">OdbNetwork</a></code> | <code>string</code> | The name of the OdbNetwork associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupOdbSubnet`<sup>Required</sup> <a name="BackupOdbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet"></a>

```csharp
public string BackupOdbSubnet { get; set; }
```

- *Type:* string

The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#backup_odb_subnet OracleDatabaseExadbVmCluster#backup_odb_subnet}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the ExadbVmCluster.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#display_name OracleDatabaseExadbVmCluster#display_name}

---

##### `ExadbVmClusterId`<sup>Required</sup> <a name="ExadbVmClusterId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId"></a>

```csharp
public string ExadbVmClusterId { get; set; }
```

- *Type:* string

The ID of the ExadbVmCluster to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#exadb_vm_cluster_id OracleDatabaseExadbVmCluster#exadb_vm_cluster_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#location OracleDatabaseExadbVmCluster#location}

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbSubnet"></a>

```csharp
public string OdbSubnet { get; set; }
```

- *Type:* string

The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#odb_subnet OracleDatabaseExadbVmCluster#odb_subnet}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.properties"></a>

```csharp
public OracleDatabaseExadbVmClusterProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#properties OracleDatabaseExadbVmCluster#properties}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#deletion_policy OracleDatabaseExadbVmCluster#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#deletion_protection OracleDatabaseExadbVmCluster#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels or tags associated with the ExadbVmCluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#labels OracleDatabaseExadbVmCluster#labels}

---

##### `OdbNetwork`<sup>Optional</sup> <a name="OdbNetwork" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbNetwork"></a>

```csharp
public string OdbNetwork { get; set; }
```

- *Type:* string

The name of the OdbNetwork associated with the ExadbVmCluster.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#odb_network OracleDatabaseExadbVmCluster#odb_network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.timeouts"></a>

```csharp
public OracleDatabaseExadbVmClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#timeouts OracleDatabaseExadbVmCluster#timeouts}

---

### OracleDatabaseExadbVmClusterIdentityConnector <a name="OracleDatabaseExadbVmClusterIdentityConnector" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterIdentityConnector {

};
```


### OracleDatabaseExadbVmClusterProperties <a name="OracleDatabaseExadbVmClusterProperties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterProperties {
    double EnabledEcpuCountPerNode,
    string ExascaleDbStorageVault,
    string GridImageId,
    string HostnamePrefix,
    double NodeCount,
    string ShapeAttribute,
    string[] SshPublicKeys,
    OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage VmFileSystemStorage,
    double AdditionalEcpuCountPerNode = null,
    string ClusterName = null,
    OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions DataCollectionOptions = null,
    string LicenseModel = null,
    double ScanListenerPortTcp = null,
    OracleDatabaseExadbVmClusterPropertiesTimeZone TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode">EnabledEcpuCountPerNode</a></code> | <code>double</code> | The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault">ExascaleDbStorageVault</a></code> | <code>string</code> | The name of ExascaleDbStorageVault associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.gridImageId">GridImageId</a></code> | <code>string</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.hostnamePrefix">HostnamePrefix</a></code> | <code>string</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.nodeCount">NodeCount</a></code> | <code>double</code> | The number of nodes/VMs in the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.shapeAttribute">ShapeAttribute</a></code> | <code>string</code> | The shape attribute of the VM cluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | The SSH public keys for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage">VmFileSystemStorage</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | vm_file_system_storage block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode">AdditionalEcpuCountPerNode</a></code> | <code>double</code> | The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.clusterName">ClusterName</a></code> | <code>string</code> | The cluster name for Exascale vm cluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.licenseModel">LicenseModel</a></code> | <code>string</code> | The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | SCAN listener port - TCP. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `EnabledEcpuCountPerNode`<sup>Required</sup> <a name="EnabledEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode"></a>

```csharp
public double EnabledEcpuCountPerNode { get; set; }
```

- *Type:* double

The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#enabled_ecpu_count_per_node OracleDatabaseExadbVmCluster#enabled_ecpu_count_per_node}

---

##### `ExascaleDbStorageVault`<sup>Required</sup> <a name="ExascaleDbStorageVault" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault"></a>

```csharp
public string ExascaleDbStorageVault { get; set; }
```

- *Type:* string

The name of ExascaleDbStorageVault associated with the ExadbVmCluster.

It can refer to an existing ExascaleDbStorageVault. Or a new one can be
created during the ExadbVmCluster creation (requires
storage_vault_properties to be set).
Format:
projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#exascale_db_storage_vault OracleDatabaseExadbVmCluster#exascale_db_storage_vault}

---

##### `GridImageId`<sup>Required</sup> <a name="GridImageId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.gridImageId"></a>

```csharp
public string GridImageId { get; set; }
```

- *Type:* string

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#grid_image_id OracleDatabaseExadbVmCluster#grid_image_id}

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.hostnamePrefix"></a>

```csharp
public string HostnamePrefix { get; set; }
```

- *Type:* string

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#hostname_prefix OracleDatabaseExadbVmCluster#hostname_prefix}

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

The number of nodes/VMs in the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#node_count OracleDatabaseExadbVmCluster#node_count}

---

##### `ShapeAttribute`<sup>Required</sup> <a name="ShapeAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.shapeAttribute"></a>

```csharp
public string ShapeAttribute { get; set; }
```

- *Type:* string

The shape attribute of the VM cluster.

The type of Exascale storage used
for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle
Database 23ai and later
Possible values:
SMART_STORAGE
BLOCK_STORAGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#shape_attribute OracleDatabaseExadbVmCluster#shape_attribute}

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; set; }
```

- *Type:* string[]

The SSH public keys for the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#ssh_public_keys OracleDatabaseExadbVmCluster#ssh_public_keys}

---

##### `VmFileSystemStorage`<sup>Required</sup> <a name="VmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage VmFileSystemStorage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

vm_file_system_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#vm_file_system_storage OracleDatabaseExadbVmCluster#vm_file_system_storage}

---

##### `AdditionalEcpuCountPerNode`<sup>Optional</sup> <a name="AdditionalEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode"></a>

```csharp
public double AdditionalEcpuCountPerNode { get; set; }
```

- *Type:* double

The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#additional_ecpu_count_per_node OracleDatabaseExadbVmCluster#additional_ecpu_count_per_node}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

The cluster name for Exascale vm cluster.

The cluster name must begin with
an alphabetic character and may contain hyphens(-) but can not contain
underscores(_). It should be not more than 11 characters and is not case
sensitive.
OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#cluster_name OracleDatabaseExadbVmCluster#cluster_name}

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions DataCollectionOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#data_collection_options OracleDatabaseExadbVmCluster#data_collection_options}

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#license_model OracleDatabaseExadbVmCluster#license_model}

---

##### `ScanListenerPortTcp`<sup>Optional</sup> <a name="ScanListenerPortTcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; set; }
```

- *Type:* double

SCAN listener port - TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#scan_listener_port_tcp OracleDatabaseExadbVmCluster#scan_listener_port_tcp}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.timeZone"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesTimeZone TimeZone { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#time_zone OracleDatabaseExadbVmCluster#time_zone}

---

### OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions <a name="OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions {
    bool|IResolvable IsDiagnosticsEventsEnabled = null,
    bool|IResolvable IsHealthMonitoringEnabled = null,
    bool|IResolvable IsIncidentLogsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable health monitoring. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```csharp
public bool|IResolvable IsDiagnosticsEventsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#is_diagnostics_events_enabled OracleDatabaseExadbVmCluster#is_diagnostics_events_enabled}

---

##### `IsHealthMonitoringEnabled`<sup>Optional</sup> <a name="IsHealthMonitoringEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```csharp
public bool|IResolvable IsHealthMonitoringEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable health monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#is_health_monitoring_enabled OracleDatabaseExadbVmCluster#is_health_monitoring_enabled}

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```csharp
public bool|IResolvable IsIncidentLogsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#is_incident_logs_enabled OracleDatabaseExadbVmCluster#is_incident_logs_enabled}

---

### OracleDatabaseExadbVmClusterPropertiesTimeZone <a name="OracleDatabaseExadbVmClusterPropertiesTimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterPropertiesTimeZone {
    string Id = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.id">Id</a></code> | <code>string</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.version">Version</a></code> | <code>string</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#version OracleDatabaseExadbVmCluster#version}

---

### OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage <a name="OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage {
    double SizeInGbsPerNode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode">SizeInGbsPerNode</a></code> | <code>double</code> | The storage allocation for the exadbvmcluster per node, in gigabytes (GB). |

---

##### `SizeInGbsPerNode`<sup>Required</sup> <a name="SizeInGbsPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode"></a>

```csharp
public double SizeInGbsPerNode { get; set; }
```

- *Type:* double

The storage allocation for the exadbvmcluster per node, in gigabytes (GB).

This field is used to calculate the total storage allocation for the
exadbvmcluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#size_in_gbs_per_node OracleDatabaseExadbVmCluster#size_in_gbs_per_node}

---

### OracleDatabaseExadbVmClusterTimeouts <a name="OracleDatabaseExadbVmClusterTimeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#create OracleDatabaseExadbVmCluster#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#delete OracleDatabaseExadbVmCluster#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#update OracleDatabaseExadbVmCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#create OracleDatabaseExadbVmCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#delete OracleDatabaseExadbVmCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/oracle_database_exadb_vm_cluster#update OracleDatabaseExadbVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseExadbVmClusterIdentityConnectorList <a name="OracleDatabaseExadbVmClusterIdentityConnectorList" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterIdentityConnectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.get"></a>

```csharp
private OracleDatabaseExadbVmClusterIdentityConnectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OracleDatabaseExadbVmClusterIdentityConnectorOutputReference <a name="OracleDatabaseExadbVmClusterIdentityConnectorOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterIdentityConnectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.property.serviceAgentEmail">ServiceAgentEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnector">OracleDatabaseExadbVmClusterIdentityConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `ServiceAgentEmail`<sup>Required</sup> <a name="ServiceAgentEmail" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.property.serviceAgentEmail"></a>

```csharp
public string ServiceAgentEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnectorOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseExadbVmClusterIdentityConnector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterIdentityConnector">OracleDatabaseExadbVmClusterIdentityConnector</a>

---


### OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">ResetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```csharp
private void ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsHealthMonitoringEnabled` <a name="ResetIsHealthMonitoringEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```csharp
private void ResetIsHealthMonitoringEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```csharp
private void ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">IsHealthMonitoringEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```csharp
public bool|IResolvable IsDiagnosticsEventsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="IsHealthMonitoringEnabledInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```csharp
public bool|IResolvable IsHealthMonitoringEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```csharp
public bool|IResolvable IsIncidentLogsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```csharp
public bool|IResolvable IsDiagnosticsEventsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```csharp
public bool|IResolvable IsHealthMonitoringEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```csharp
public bool|IResolvable IsIncidentLogsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---


### OracleDatabaseExadbVmClusterPropertiesOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage">PutVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode">ResetAdditionalEcpuCountPerNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp">ResetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions"></a>

```csharp
private void PutDataCollectionOptions(OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone"></a>

```csharp
private void PutTimeZone(OracleDatabaseExadbVmClusterPropertiesTimeZone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `PutVmFileSystemStorage` <a name="PutVmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage"></a>

```csharp
private void PutVmFileSystemStorage(OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `ResetAdditionalEcpuCountPerNode` <a name="ResetAdditionalEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode"></a>

```csharp
private void ResetAdditionalEcpuCountPerNode()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions"></a>

```csharp
private void ResetDataCollectionOptions()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetScanListenerPortTcp` <a name="ResetScanListenerPortTcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp"></a>

```csharp
private void ResetScanListenerPortTcp()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion">GiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri">OciUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage">VmFileSystemStorage</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput">AdditionalEcpuCountPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput">EnabledEcpuCountPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput">ExascaleDbStorageVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput">GridImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput">HostnamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput">ScanListenerPortTcpInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput">ShapeAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput">VmFileSystemStorageInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode">AdditionalEcpuCountPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode">EnabledEcpuCountPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault">ExascaleDbStorageVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId">GridImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix">HostnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute">ShapeAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference DataCollectionOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a>

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion"></a>

```csharp
public string GiVersion { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```csharp
public double MemorySizeGb { get; }
```

- *Type:* double

---

##### `OciUri`<sup>Required</sup> <a name="OciUri" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri"></a>

```csharp
public string OciUri { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference TimeZone { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `VmFileSystemStorage`<sup>Required</sup> <a name="VmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference VmFileSystemStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a>

---

##### `AdditionalEcpuCountPerNodeInput`<sup>Optional</sup> <a name="AdditionalEcpuCountPerNodeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput"></a>

```csharp
public double AdditionalEcpuCountPerNodeInput { get; }
```

- *Type:* double

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions DataCollectionOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `EnabledEcpuCountPerNodeInput`<sup>Optional</sup> <a name="EnabledEcpuCountPerNodeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput"></a>

```csharp
public double EnabledEcpuCountPerNodeInput { get; }
```

- *Type:* double

---

##### `ExascaleDbStorageVaultInput`<sup>Optional</sup> <a name="ExascaleDbStorageVaultInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput"></a>

```csharp
public string ExascaleDbStorageVaultInput { get; }
```

- *Type:* string

---

##### `GridImageIdInput`<sup>Optional</sup> <a name="GridImageIdInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput"></a>

```csharp
public string GridImageIdInput { get; }
```

- *Type:* string

---

##### `HostnamePrefixInput`<sup>Optional</sup> <a name="HostnamePrefixInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```csharp
public string HostnamePrefixInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `ScanListenerPortTcpInput`<sup>Optional</sup> <a name="ScanListenerPortTcpInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput"></a>

```csharp
public double ScanListenerPortTcpInput { get; }
```

- *Type:* double

---

##### `ShapeAttributeInput`<sup>Optional</sup> <a name="ShapeAttributeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput"></a>

```csharp
public string ShapeAttributeInput { get; }
```

- *Type:* string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```csharp
public string[] SshPublicKeysInput { get; }
```

- *Type:* string[]

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesTimeZone TimeZoneInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `VmFileSystemStorageInput`<sup>Optional</sup> <a name="VmFileSystemStorageInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage VmFileSystemStorageInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `AdditionalEcpuCountPerNode`<sup>Required</sup> <a name="AdditionalEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode"></a>

```csharp
public double AdditionalEcpuCountPerNode { get; }
```

- *Type:* double

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `EnabledEcpuCountPerNode`<sup>Required</sup> <a name="EnabledEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode"></a>

```csharp
public double EnabledEcpuCountPerNode { get; }
```

- *Type:* double

---

##### `ExascaleDbStorageVault`<sup>Required</sup> <a name="ExascaleDbStorageVault" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault"></a>

```csharp
public string ExascaleDbStorageVault { get; }
```

- *Type:* string

---

##### `GridImageId`<sup>Required</sup> <a name="GridImageId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId"></a>

```csharp
public string GridImageId { get; }
```

- *Type:* string

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```csharp
public string HostnamePrefix { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; }
```

- *Type:* double

---

##### `ShapeAttribute`<sup>Required</sup> <a name="ShapeAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute"></a>

```csharp
public string ShapeAttribute { get; }
```

- *Type:* string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseExadbVmClusterProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

---


### OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesTimeZone InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---


### OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput">SizeInGbsPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode">SizeInGbsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeInGbsPerNodeInput`<sup>Optional</sup> <a name="SizeInGbsPerNodeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput"></a>

```csharp
public double SizeInGbsPerNodeInput { get; }
```

- *Type:* double

---

##### `SizeInGbsPerNode`<sup>Required</sup> <a name="SizeInGbsPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode"></a>

```csharp
public double SizeInGbsPerNode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---


### OracleDatabaseExadbVmClusterTimeoutsOutputReference <a name="OracleDatabaseExadbVmClusterTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new OracleDatabaseExadbVmClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OracleDatabaseExadbVmClusterTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

---



