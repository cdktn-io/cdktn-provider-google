# `dataprocMetastoreFederation` Submodule <a name="`dataprocMetastoreFederation` Submodule" id="@cdktn/provider-google.dataprocMetastoreFederation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocMetastoreFederation <a name="DataprocMetastoreFederation" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation google_dataproc_metastore_federation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocMetastoreFederation(Construct Scope, string Id, DataprocMetastoreFederationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig">DataprocMetastoreFederationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig">DataprocMetastoreFederationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putBackendMetastores">PutBackendMetastores</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackendMetastores` <a name="PutBackendMetastores" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putBackendMetastores"></a>

```csharp
private void PutBackendMetastores(IResolvable|DataprocMetastoreFederationBackendMetastores[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putBackendMetastores.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putTimeouts"></a>

```csharp
private void PutTimeouts(DataprocMetastoreFederationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataprocMetastoreFederation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataprocMetastoreFederation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataprocMetastoreFederation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataprocMetastoreFederation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataprocMetastoreFederation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataprocMetastoreFederation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocMetastoreFederation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocMetastoreFederation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataprocMetastoreFederation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.backendMetastores">BackendMetastores</a></code> | <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList">DataprocMetastoreFederationBackendMetastoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.endpointUri">EndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference">DataprocMetastoreFederationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.backendMetastoresInput">BackendMetastoresInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.federationIdInput">FederationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.federationId">FederationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackendMetastores`<sup>Required</sup> <a name="BackendMetastores" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.backendMetastores"></a>

```csharp
public DataprocMetastoreFederationBackendMetastoresList BackendMetastores { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList">DataprocMetastoreFederationBackendMetastoresList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.endpointUri"></a>

```csharp
public string EndpointUri { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.timeouts"></a>

```csharp
public DataprocMetastoreFederationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference">DataprocMetastoreFederationTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BackendMetastoresInput`<sup>Optional</sup> <a name="BackendMetastoresInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.backendMetastoresInput"></a>

```csharp
public IResolvable|DataprocMetastoreFederationBackendMetastores[] BackendMetastoresInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FederationIdInput`<sup>Optional</sup> <a name="FederationIdInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.federationIdInput"></a>

```csharp
public string FederationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.timeoutsInput"></a>

```csharp
public IResolvable|DataprocMetastoreFederationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FederationId`<sup>Required</sup> <a name="FederationId" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.federationId"></a>

```csharp
public string FederationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocMetastoreFederationBackendMetastores <a name="DataprocMetastoreFederationBackendMetastores" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocMetastoreFederationBackendMetastores {
    string MetastoreType,
    string Name,
    string Rank
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.metastoreType">MetastoreType</a></code> | <code>string</code> | The type of the backend metastore. Possible values: ["METASTORE_TYPE_UNSPECIFIED", "DATAPROC_METASTORE", "BIGQUERY"]. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.name">Name</a></code> | <code>string</code> | The relative resource name of the metastore that is being federated. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.rank">Rank</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#rank DataprocMetastoreFederation#rank}. |

---

##### `MetastoreType`<sup>Required</sup> <a name="MetastoreType" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.metastoreType"></a>

```csharp
public string MetastoreType { get; set; }
```

- *Type:* string

The type of the backend metastore. Possible values: ["METASTORE_TYPE_UNSPECIFIED", "DATAPROC_METASTORE", "BIGQUERY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#metastore_type DataprocMetastoreFederation#metastore_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The relative resource name of the metastore that is being federated.

The formats of the relative resource names for the currently supported metastores are listed below: Dataplex: projects/{projectId}/locations/{location}/lakes/{lake_id} BigQuery: projects/{projectId} Dataproc Metastore: projects/{projectId}/locations/{location}/services/{serviceId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#name DataprocMetastoreFederation#name}

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores.property.rank"></a>

```csharp
public string Rank { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#rank DataprocMetastoreFederation#rank}.

---

### DataprocMetastoreFederationConfig <a name="DataprocMetastoreFederationConfig" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocMetastoreFederationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataprocMetastoreFederationBackendMetastores[] BackendMetastores,
    string FederationId,
    string Version,
    string DeletionPolicy = null,
    bool|IResolvable DeletionProtection = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataprocMetastoreFederationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.backendMetastores">BackendMetastores</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]</code> | backend_metastores block. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.federationId">FederationId</a></code> | <code>string</code> | The ID of the metastore federation. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.version">Version</a></code> | <code>string</code> | The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Terraform will be prevented from destroying the federation. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#id DataprocMetastoreFederation#id}. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels for the metastore federation. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.location">Location</a></code> | <code>string</code> | The location where the metastore federation should reside. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#project DataprocMetastoreFederation#project}. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource manager tags. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackendMetastores`<sup>Required</sup> <a name="BackendMetastores" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.backendMetastores"></a>

```csharp
public IResolvable|DataprocMetastoreFederationBackendMetastores[] BackendMetastores { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]

backend_metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#backend_metastores DataprocMetastoreFederation#backend_metastores}

---

##### `FederationId`<sup>Required</sup> <a name="FederationId" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.federationId"></a>

```csharp
public string FederationId { get; set; }
```

- *Type:* string

The ID of the metastore federation.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#federation_id DataprocMetastoreFederation#federation_id}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#version DataprocMetastoreFederation#version}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#deletion_policy DataprocMetastoreFederation#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Terraform will be prevented from destroying the federation.

Defaults to false.
When the field is set to true in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the federation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#deletion_protection DataprocMetastoreFederation#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#id DataprocMetastoreFederation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels for the metastore federation.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#labels DataprocMetastoreFederation#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location where the metastore federation should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#location DataprocMetastoreFederation#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#project DataprocMetastoreFederation#project}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/{tag_value_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#tags DataprocMetastoreFederation#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationConfig.property.timeouts"></a>

```csharp
public DataprocMetastoreFederationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#timeouts DataprocMetastoreFederation#timeouts}

---

### DataprocMetastoreFederationTimeouts <a name="DataprocMetastoreFederationTimeouts" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocMetastoreFederationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#create DataprocMetastoreFederation#create}. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#delete DataprocMetastoreFederation#delete}. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#update DataprocMetastoreFederation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#create DataprocMetastoreFederation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#delete DataprocMetastoreFederation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataproc_metastore_federation#update DataprocMetastoreFederation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocMetastoreFederationBackendMetastoresList <a name="DataprocMetastoreFederationBackendMetastoresList" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocMetastoreFederationBackendMetastoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.get"></a>

```csharp
private DataprocMetastoreFederationBackendMetastoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresList.property.internalValue"></a>

```csharp
public IResolvable|DataprocMetastoreFederationBackendMetastores[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>[]

---


### DataprocMetastoreFederationBackendMetastoresOutputReference <a name="DataprocMetastoreFederationBackendMetastoresOutputReference" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocMetastoreFederationBackendMetastoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreTypeInput">MetastoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.rankInput">RankInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreType">MetastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.rank">Rank</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetastoreTypeInput`<sup>Optional</sup> <a name="MetastoreTypeInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreTypeInput"></a>

```csharp
public string MetastoreTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RankInput`<sup>Optional</sup> <a name="RankInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.rankInput"></a>

```csharp
public string RankInput { get; }
```

- *Type:* string

---

##### `MetastoreType`<sup>Required</sup> <a name="MetastoreType" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreType"></a>

```csharp
public string MetastoreType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.rank"></a>

```csharp
public string Rank { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastoresOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataprocMetastoreFederationBackendMetastores InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationBackendMetastores">DataprocMetastoreFederationBackendMetastores</a>

---


### DataprocMetastoreFederationTimeoutsOutputReference <a name="DataprocMetastoreFederationTimeoutsOutputReference" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataprocMetastoreFederationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataprocMetastoreFederationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataprocMetastoreFederation.DataprocMetastoreFederationTimeouts">DataprocMetastoreFederationTimeouts</a>

---



