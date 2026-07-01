# `biglakeIcebergCatalog` Submodule <a name="`biglakeIcebergCatalog` Submodule" id="@cdktn/provider-google.biglakeIcebergCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeIcebergCatalog <a name="BiglakeIcebergCatalog" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog google_biglake_iceberg_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeIcebergCatalog(Construct Scope, string Id, BiglakeIcebergCatalogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig">BiglakeIcebergCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig">BiglakeIcebergCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putRestrictedLocationsConfig">PutRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetCredentialMode">ResetCredentialMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDefaultLocation">ResetDefaultLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetPrimaryLocation">ResetPrimaryLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetRestrictedLocationsConfig">ResetRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRestrictedLocationsConfig` <a name="PutRestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putRestrictedLocationsConfig"></a>

```csharp
private void PutRestrictedLocationsConfig(BiglakeIcebergCatalogRestrictedLocationsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putRestrictedLocationsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts"></a>

```csharp
private void PutTimeouts(BiglakeIcebergCatalogTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

---

##### `ResetCredentialMode` <a name="ResetCredentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetCredentialMode"></a>

```csharp
private void ResetCredentialMode()
```

##### `ResetDefaultLocation` <a name="ResetDefaultLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDefaultLocation"></a>

```csharp
private void ResetDefaultLocation()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrimaryLocation` <a name="ResetPrimaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetPrimaryLocation"></a>

```csharp
private void ResetPrimaryLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRestrictedLocationsConfig` <a name="ResetRestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetRestrictedLocationsConfig"></a>

```csharp
private void ResetRestrictedLocationsConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeIcebergCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeIcebergCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeIcebergCatalog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeIcebergCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BiglakeIcebergCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BiglakeIcebergCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeIcebergCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccount">BiglakeServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.replicas">Replicas</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList">BiglakeIcebergCatalogReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfig">RestrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.storageRegions">StorageRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference">BiglakeIcebergCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogTypeInput">CatalogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialModeInput">CredentialModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocationInput">DefaultLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocationInput">PrimaryLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfigInput">RestrictedLocationsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogType">CatalogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialMode">CredentialMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocation">DefaultLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocation">PrimaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BiglakeServiceAccount`<sup>Required</sup> <a name="BiglakeServiceAccount" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccount"></a>

```csharp
public string BiglakeServiceAccount { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.replicas"></a>

```csharp
public BiglakeIcebergCatalogReplicasList Replicas { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList">BiglakeIcebergCatalogReplicasList</a>

---

##### `RestrictedLocationsConfig`<sup>Required</sup> <a name="RestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfig"></a>

```csharp
public BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference RestrictedLocationsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a>

---

##### `StorageRegions`<sup>Required</sup> <a name="StorageRegions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.storageRegions"></a>

```csharp
public string[] StorageRegions { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeouts"></a>

```csharp
public BiglakeIcebergCatalogTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference">BiglakeIcebergCatalogTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CatalogTypeInput`<sup>Optional</sup> <a name="CatalogTypeInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogTypeInput"></a>

```csharp
public string CatalogTypeInput { get; }
```

- *Type:* string

---

##### `CredentialModeInput`<sup>Optional</sup> <a name="CredentialModeInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialModeInput"></a>

```csharp
public string CredentialModeInput { get; }
```

- *Type:* string

---

##### `DefaultLocationInput`<sup>Optional</sup> <a name="DefaultLocationInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocationInput"></a>

```csharp
public string DefaultLocationInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryLocationInput`<sup>Optional</sup> <a name="PrimaryLocationInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocationInput"></a>

```csharp
public string PrimaryLocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RestrictedLocationsConfigInput`<sup>Optional</sup> <a name="RestrictedLocationsConfigInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfigInput"></a>

```csharp
public BiglakeIcebergCatalogRestrictedLocationsConfig RestrictedLocationsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeoutsInput"></a>

```csharp
public IResolvable|BiglakeIcebergCatalogTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogType"></a>

```csharp
public string CatalogType { get; }
```

- *Type:* string

---

##### `CredentialMode`<sup>Required</sup> <a name="CredentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialMode"></a>

```csharp
public string CredentialMode { get; }
```

- *Type:* string

---

##### `DefaultLocation`<sup>Required</sup> <a name="DefaultLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocation"></a>

```csharp
public string DefaultLocation { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryLocation`<sup>Required</sup> <a name="PrimaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocation"></a>

```csharp
public string PrimaryLocation { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeIcebergCatalogConfig <a name="BiglakeIcebergCatalogConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeIcebergCatalogConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CatalogType,
    string Name,
    string CredentialMode = null,
    string DefaultLocation = null,
    string DeletionPolicy = null,
    string Id = null,
    string PrimaryLocation = null,
    string Project = null,
    BiglakeIcebergCatalogRestrictedLocationsConfig RestrictedLocationsConfig = null,
    BiglakeIcebergCatalogTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.catalogType">CatalogType</a></code> | <code>string</code> | The catalog type of the IcebergCatalog. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE"]. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.name">Name</a></code> | <code>string</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.credentialMode">CredentialMode</a></code> | <code>string</code> | The credential mode used for the catalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.defaultLocation">DefaultLocation</a></code> | <code>string</code> | The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#id BiglakeIcebergCatalog#id}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.primaryLocation">PrimaryLocation</a></code> | <code>string</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#project BiglakeIcebergCatalog#project}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.restrictedLocationsConfig">RestrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | restricted_locations_config block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.catalogType"></a>

```csharp
public string CatalogType { get; set; }
```

- *Type:* string

The catalog type of the IcebergCatalog. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#catalog_type BiglakeIcebergCatalog#catalog_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the IcebergCatalog.

For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
exact same value of the GCS bucket's name. For example, for a bucket:
gs://bucket-name, the catalog name will be exactly "bucket-name".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#name BiglakeIcebergCatalog#name}

---

##### `CredentialMode`<sup>Optional</sup> <a name="CredentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.credentialMode"></a>

```csharp
public string CredentialMode { get; set; }
```

- *Type:* string

The credential mode used for the catalog.

CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#credential_mode BiglakeIcebergCatalog#credential_mode}

---

##### `DefaultLocation`<sup>Optional</sup> <a name="DefaultLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.defaultLocation"></a>

```csharp
public string DefaultLocation { get; set; }
```

- *Type:* string

The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#default_location BiglakeIcebergCatalog#default_location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#deletion_policy BiglakeIcebergCatalog#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#id BiglakeIcebergCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrimaryLocation`<sup>Optional</sup> <a name="PrimaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.primaryLocation"></a>

```csharp
public string PrimaryLocation { get; set; }
```

- *Type:* string

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#primary_location BiglakeIcebergCatalog#primary_location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#project BiglakeIcebergCatalog#project}.

---

##### `RestrictedLocationsConfig`<sup>Optional</sup> <a name="RestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.restrictedLocationsConfig"></a>

```csharp
public BiglakeIcebergCatalogRestrictedLocationsConfig RestrictedLocationsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

restricted_locations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#restricted_locations_config BiglakeIcebergCatalog#restricted_locations_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.timeouts"></a>

```csharp
public BiglakeIcebergCatalogTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#timeouts BiglakeIcebergCatalog#timeouts}

---

### BiglakeIcebergCatalogReplicas <a name="BiglakeIcebergCatalogReplicas" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeIcebergCatalogReplicas {

};
```


### BiglakeIcebergCatalogRestrictedLocationsConfig <a name="BiglakeIcebergCatalogRestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeIcebergCatalogRestrictedLocationsConfig {
    string[] RestrictedLocations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations">RestrictedLocations</a></code> | <code>string[]</code> | A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it. |

---

##### `RestrictedLocations`<sup>Optional</sup> <a name="RestrictedLocations" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations"></a>

```csharp
public string[] RestrictedLocations { get; set; }
```

- *Type:* string[]

A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#restricted_locations BiglakeIcebergCatalog#restricted_locations}

---

### BiglakeIcebergCatalogTimeouts <a name="BiglakeIcebergCatalogTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeIcebergCatalogTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#create BiglakeIcebergCatalog#create}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#delete BiglakeIcebergCatalog#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#update BiglakeIcebergCatalog#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#create BiglakeIcebergCatalog#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#delete BiglakeIcebergCatalog#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/biglake_iceberg_catalog#update BiglakeIcebergCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeIcebergCatalogReplicasList <a name="BiglakeIcebergCatalogReplicasList" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeIcebergCatalogReplicasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get"></a>

```csharp
private BiglakeIcebergCatalogReplicasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BiglakeIcebergCatalogReplicasOutputReference <a name="BiglakeIcebergCatalogReplicasOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeIcebergCatalogReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas">BiglakeIcebergCatalogReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.internalValue"></a>

```csharp
public BiglakeIcebergCatalogReplicas InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas">BiglakeIcebergCatalogReplicas</a>

---


### BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference <a name="BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations">ResetRestrictedLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRestrictedLocations` <a name="ResetRestrictedLocations" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations"></a>

```csharp
private void ResetRestrictedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput">RestrictedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations">RestrictedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestrictedLocationsInput`<sup>Optional</sup> <a name="RestrictedLocationsInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput"></a>

```csharp
public string[] RestrictedLocationsInput { get; }
```

- *Type:* string[]

---

##### `RestrictedLocations`<sup>Required</sup> <a name="RestrictedLocations" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations"></a>

```csharp
public string[] RestrictedLocations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue"></a>

```csharp
public BiglakeIcebergCatalogRestrictedLocationsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

---


### BiglakeIcebergCatalogTimeoutsOutputReference <a name="BiglakeIcebergCatalogTimeoutsOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeIcebergCatalogTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BiglakeIcebergCatalogTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

---



