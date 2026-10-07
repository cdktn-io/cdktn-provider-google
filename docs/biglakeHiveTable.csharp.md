# `biglakeHiveTable` Submodule <a name="`biglakeHiveTable` Submodule" id="@cdktn/provider-google.biglakeHiveTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveTable <a name="BiglakeHiveTable" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table google_biglake_hive_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTable(Construct Scope, string Id, BiglakeHiveTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig">BiglakeHiveTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig">BiglakeHiveTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys">PutPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor">PutStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetPartitionKeys">ResetPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewExpandedText">ResetViewExpandedText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewOriginalText">ResetViewOriginalText</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPartitionKeys` <a name="PutPartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys"></a>

```csharp
private void PutPartitionKeys(IResolvable|BiglakeHiveTablePartitionKeys[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]

---

##### `PutStorageDescriptor` <a name="PutStorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor"></a>

```csharp
private void PutStorageDescriptor(BiglakeHiveTableStorageDescriptor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts"></a>

```csharp
private void PutTimeouts(BiglakeHiveTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPartitionKeys` <a name="ResetPartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetPartitionKeys"></a>

```csharp
private void ResetPartitionKeys()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetViewExpandedText` <a name="ResetViewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewExpandedText"></a>

```csharp
private void ResetViewExpandedText()
```

##### `ResetViewOriginalText` <a name="ResetViewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewOriginalText"></a>

```csharp
private void ResetViewOriginalText()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeHiveTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

BiglakeHiveTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BiglakeHiveTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BiglakeHiveTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BiglakeHiveTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lastAccessTime">LastAccessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeys">PartitionKeys</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList">BiglakeHiveTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference">BiglakeHiveTableStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tableType">TableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference">BiglakeHiveTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeysInput">PartitionKeysInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptorInput">StorageDescriptorInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedTextInput">ViewExpandedTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalTextInput">ViewOriginalTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedText">ViewExpandedText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalText">ViewOriginalText</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `LastAccessTime`<sup>Required</sup> <a name="LastAccessTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lastAccessTime"></a>

```csharp
public string LastAccessTime { get; }
```

- *Type:* string

---

##### `PartitionKeys`<sup>Required</sup> <a name="PartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeys"></a>

```csharp
public BiglakeHiveTablePartitionKeysList PartitionKeys { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList">BiglakeHiveTablePartitionKeysList</a>

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptor"></a>

```csharp
public BiglakeHiveTableStorageDescriptorOutputReference StorageDescriptor { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference">BiglakeHiveTableStorageDescriptorOutputReference</a>

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tableType"></a>

```csharp
public string TableType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeouts"></a>

```csharp
public BiglakeHiveTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference">BiglakeHiveTableTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PartitionKeysInput`<sup>Optional</sup> <a name="PartitionKeysInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeysInput"></a>

```csharp
public IResolvable|BiglakeHiveTablePartitionKeys[] PartitionKeysInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StorageDescriptorInput`<sup>Optional</sup> <a name="StorageDescriptorInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptorInput"></a>

```csharp
public BiglakeHiveTableStorageDescriptor StorageDescriptorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeoutsInput"></a>

```csharp
public IResolvable|BiglakeHiveTableTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---

##### `ViewExpandedTextInput`<sup>Optional</sup> <a name="ViewExpandedTextInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedTextInput"></a>

```csharp
public string ViewExpandedTextInput { get; }
```

- *Type:* string

---

##### `ViewOriginalTextInput`<sup>Optional</sup> <a name="ViewOriginalTextInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalTextInput"></a>

```csharp
public string ViewOriginalTextInput { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ViewExpandedText`<sup>Required</sup> <a name="ViewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedText"></a>

```csharp
public string ViewExpandedText { get; }
```

- *Type:* string

---

##### `ViewOriginalText`<sup>Required</sup> <a name="ViewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalText"></a>

```csharp
public string ViewOriginalText { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveTableConfig <a name="BiglakeHiveTableConfig" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Catalog,
    string Database,
    string Name,
    BiglakeHiveTableStorageDescriptor StorageDescriptor,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    IResolvable|BiglakeHiveTablePartitionKeys[] PartitionKeys = null,
    string Project = null,
    BiglakeHiveTableTimeouts Timeouts = null,
    string ViewExpandedText = null,
    string ViewOriginalText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.catalog">Catalog</a></code> | <code>string</code> | The Hive catalog where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.database">Database</a></code> | <code>string</code> | The Hive database where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.name">Name</a></code> | <code>string</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.description">Description</a></code> | <code>string</code> | Description of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Additional parameters associated with the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.partitionKeys">PartitionKeys</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]</code> | partition_keys block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewExpandedText">ViewExpandedText</a></code> | <code>string</code> | Expanded view text for Hive views. Empty for non-view. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewOriginalText">ViewOriginalText</a></code> | <code>string</code> | Original view text for Hive views. Empty for non-view. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

The Hive catalog where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#catalog BiglakeHiveTable#catalog}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The Hive database where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#database BiglakeHiveTable#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.storageDescriptor"></a>

```csharp
public BiglakeHiveTableStorageDescriptor StorageDescriptor { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#storage_descriptor BiglakeHiveTable#storage_descriptor}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deletion_policy BiglakeHiveTable#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Additional parameters associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `PartitionKeys`<sup>Optional</sup> <a name="PartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.partitionKeys"></a>

```csharp
public IResolvable|BiglakeHiveTablePartitionKeys[] PartitionKeys { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]

partition_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#partition_keys BiglakeHiveTable#partition_keys}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.timeouts"></a>

```csharp
public BiglakeHiveTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#timeouts BiglakeHiveTable#timeouts}

---

##### `ViewExpandedText`<sup>Optional</sup> <a name="ViewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewExpandedText"></a>

```csharp
public string ViewExpandedText { get; set; }
```

- *Type:* string

Expanded view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_expanded_text BiglakeHiveTable#view_expanded_text}

---

##### `ViewOriginalText`<sup>Optional</sup> <a name="ViewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewOriginalText"></a>

```csharp
public string ViewOriginalText { get; set; }
```

- *Type:* string

Original view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_original_text BiglakeHiveTable#view_original_text}

---

### BiglakeHiveTablePartitionKeys <a name="BiglakeHiveTablePartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTablePartitionKeys {
    string Name,
    string Type,
    string Comment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.name">Name</a></code> | <code>string</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.type">Type</a></code> | <code>string</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.comment">Comment</a></code> | <code>string</code> | Comment of the field. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}

---

### BiglakeHiveTableStorageDescriptor <a name="BiglakeHiveTableStorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptor {
    IResolvable|BiglakeHiveTableStorageDescriptorColumns[] Columns,
    string[] BucketCols = null,
    bool|IResolvable Compressed = null,
    string InputFormat = null,
    string LocationUri = null,
    double NumBuckets = null,
    string OutputFormat = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    BiglakeHiveTableStorageDescriptorSerdeInfo SerdeInfo = null,
    BiglakeHiveTableStorageDescriptorSkewedInfo SkewedInfo = null,
    IResolvable|BiglakeHiveTableStorageDescriptorSortCols[] SortCols = null,
    bool|IResolvable StoredAsSubDirs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.columns">Columns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]</code> | columns block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.bucketCols">BucketCols</a></code> | <code>string[]</code> | Reducer grouping columns, clustering columns, and bucketing columns. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.compressed">Compressed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the table data is compressed. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.inputFormat">InputFormat</a></code> | <code>string</code> | The fully qualified Java class name of the input format. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.locationUri">LocationUri</a></code> | <code>string</code> | The Cloud Storage URI where the table data is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.numBuckets">NumBuckets</a></code> | <code>double</code> | The number of buckets in the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.outputFormat">OutputFormat</a></code> | <code>string</code> | The fully qualified Java class name of the output format. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Key-value pairs for the storage descriptor. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | serde_info block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.sortCols">SortCols</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]</code> | sort_cols block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.storedAsSubDirs">StoredAsSubDirs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the table is stored as sub directories. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.columns"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorColumns[] Columns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#columns BiglakeHiveTable#columns}

---

##### `BucketCols`<sup>Optional</sup> <a name="BucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.bucketCols"></a>

```csharp
public string[] BucketCols { get; set; }
```

- *Type:* string[]

Reducer grouping columns, clustering columns, and bucketing columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#bucket_cols BiglakeHiveTable#bucket_cols}

---

##### `Compressed`<sup>Optional</sup> <a name="Compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.compressed"></a>

```csharp
public bool|IResolvable Compressed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the table data is compressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#compressed BiglakeHiveTable#compressed}

---

##### `InputFormat`<sup>Optional</sup> <a name="InputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.inputFormat"></a>

```csharp
public string InputFormat { get; set; }
```

- *Type:* string

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#input_format BiglakeHiveTable#input_format}

---

##### `LocationUri`<sup>Optional</sup> <a name="LocationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.locationUri"></a>

```csharp
public string LocationUri { get; set; }
```

- *Type:* string

The Cloud Storage URI where the table data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location_uri BiglakeHiveTable#location_uri}

---

##### `NumBuckets`<sup>Optional</sup> <a name="NumBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.numBuckets"></a>

```csharp
public double NumBuckets { get; set; }
```

- *Type:* double

The number of buckets in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#num_buckets BiglakeHiveTable#num_buckets}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#output_format BiglakeHiveTable#output_format}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Key-value pairs for the storage descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `SerdeInfo`<sup>Optional</sup> <a name="SerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.serdeInfo"></a>

```csharp
public BiglakeHiveTableStorageDescriptorSerdeInfo SerdeInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

serde_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_info BiglakeHiveTable#serde_info}

---

##### `SkewedInfo`<sup>Optional</sup> <a name="SkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.skewedInfo"></a>

```csharp
public BiglakeHiveTableStorageDescriptorSkewedInfo SkewedInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_info BiglakeHiveTable#skewed_info}

---

##### `SortCols`<sup>Optional</sup> <a name="SortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.sortCols"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSortCols[] SortCols { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]

sort_cols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#sort_cols BiglakeHiveTable#sort_cols}

---

##### `StoredAsSubDirs`<sup>Optional</sup> <a name="StoredAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.storedAsSubDirs"></a>

```csharp
public bool|IResolvable StoredAsSubDirs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the table is stored as sub directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#stored_as_sub_dirs BiglakeHiveTable#stored_as_sub_dirs}

---

### BiglakeHiveTableStorageDescriptorColumns <a name="BiglakeHiveTableStorageDescriptorColumns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorColumns {
    string Name,
    string Type,
    string Comment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.name">Name</a></code> | <code>string</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.type">Type</a></code> | <code>string</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.comment">Comment</a></code> | <code>string</code> | Comment of the field. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}

---

### BiglakeHiveTableStorageDescriptorSerdeInfo <a name="BiglakeHiveTableStorageDescriptorSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSerdeInfo {
    string Name,
    string SerializationLib,
    string Description = null,
    string DeserializerClass = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string SerdeType = null,
    string SerializerClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.name">Name</a></code> | <code>string</code> | Name of the SerDe, table name by default. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib">SerializationLib</a></code> | <code>string</code> | The fully qualified Java class name of the serialization library. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.description">Description</a></code> | <code>string</code> | Description of the SerDe. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass">DeserializerClass</a></code> | <code>string</code> | The fully qualified Java class name of the deserializer. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Parameters of the SerDe. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType">SerdeType</a></code> | <code>string</code> | The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"]. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass">SerializerClass</a></code> | <code>string</code> | The fully qualified Java class name of the serializer. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the SerDe, table name by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `SerializationLib`<sup>Required</sup> <a name="SerializationLib" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib"></a>

```csharp
public string SerializationLib { get; set; }
```

- *Type:* string

The fully qualified Java class name of the serialization library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serialization_lib BiglakeHiveTable#serialization_lib}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `DeserializerClass`<sup>Optional</sup> <a name="DeserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass"></a>

```csharp
public string DeserializerClass { get; set; }
```

- *Type:* string

The fully qualified Java class name of the deserializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deserializer_class BiglakeHiveTable#deserializer_class}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Parameters of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `SerdeType`<sup>Optional</sup> <a name="SerdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType"></a>

```csharp
public string SerdeType { get; set; }
```

- *Type:* string

The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_type BiglakeHiveTable#serde_type}

---

##### `SerializerClass`<sup>Optional</sup> <a name="SerializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass"></a>

```csharp
public string SerializerClass { get; set; }
```

- *Type:* string

The fully qualified Java class name of the serializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serializer_class BiglakeHiveTable#serializer_class}

---

### BiglakeHiveTableStorageDescriptorSkewedInfo <a name="BiglakeHiveTableStorageDescriptorSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSkewedInfo {
    string[] SkewedColNames,
    IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[] SkewedColValues,
    IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[] SkewedKeyValuesLocations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames">SkewedColNames</a></code> | <code>string[]</code> | The column names that are skewed. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues">SkewedColValues</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]</code> | skewed_col_values block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations">SkewedKeyValuesLocations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]</code> | skewed_key_values_locations block. |

---

##### `SkewedColNames`<sup>Required</sup> <a name="SkewedColNames" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames"></a>

```csharp
public string[] SkewedColNames { get; set; }
```

- *Type:* string[]

The column names that are skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_names BiglakeHiveTable#skewed_col_names}

---

##### `SkewedColValues`<sup>Required</sup> <a name="SkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[] SkewedColValues { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]

skewed_col_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_values BiglakeHiveTable#skewed_col_values}

---

##### `SkewedKeyValuesLocations`<sup>Required</sup> <a name="SkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[] SkewedKeyValuesLocations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]

skewed_key_values_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_key_values_locations BiglakeHiveTable#skewed_key_values_locations}

---

### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues {
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}.

---

### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations {
    string Location,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location BiglakeHiveTable#location}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location BiglakeHiveTable#location}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}.

---

### BiglakeHiveTableStorageDescriptorSortCols <a name="BiglakeHiveTableStorageDescriptorSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSortCols {
    string Col,
    double Order
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.col">Col</a></code> | <code>string</code> | The column name. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.order">Order</a></code> | <code>double</code> | Sort order: 1 for Ascending, 0 for Descending. |

---

##### `Col`<sup>Required</sup> <a name="Col" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.col"></a>

```csharp
public string Col { get; set; }
```

- *Type:* string

The column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#col BiglakeHiveTable#col}

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Sort order: 1 for Ascending, 0 for Descending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#order BiglakeHiveTable#order}

---

### BiglakeHiveTableTimeouts <a name="BiglakeHiveTableTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeHiveTablePartitionKeysList <a name="BiglakeHiveTablePartitionKeysList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTablePartitionKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get"></a>

```csharp
private BiglakeHiveTablePartitionKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveTablePartitionKeys[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>[]

---


### BiglakeHiveTablePartitionKeysOutputReference <a name="BiglakeHiveTablePartitionKeysOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTablePartitionKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resetComment">ResetComment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveTablePartitionKeys InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys">BiglakeHiveTablePartitionKeys</a>

---


### BiglakeHiveTableStorageDescriptorColumnsList <a name="BiglakeHiveTableStorageDescriptorColumnsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get"></a>

```csharp
private BiglakeHiveTableStorageDescriptorColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]

---


### BiglakeHiveTableStorageDescriptorColumnsOutputReference <a name="BiglakeHiveTableStorageDescriptorColumnsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>

---


### BiglakeHiveTableStorageDescriptorOutputReference <a name="BiglakeHiveTableStorageDescriptorOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo">PutSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo">PutSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols">PutSortCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols">ResetBucketCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetCompressed">ResetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat">ResetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri">ResetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets">ResetNumBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo">ResetSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo">ResetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSortCols">ResetSortCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs">ResetStoredAsSubDirs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns"></a>

```csharp
private void PutColumns(IResolvable|BiglakeHiveTableStorageDescriptorColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]

---

##### `PutSerdeInfo` <a name="PutSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo"></a>

```csharp
private void PutSerdeInfo(BiglakeHiveTableStorageDescriptorSerdeInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---

##### `PutSkewedInfo` <a name="PutSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo"></a>

```csharp
private void PutSkewedInfo(BiglakeHiveTableStorageDescriptorSkewedInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---

##### `PutSortCols` <a name="PutSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols"></a>

```csharp
private void PutSortCols(IResolvable|BiglakeHiveTableStorageDescriptorSortCols[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]

---

##### `ResetBucketCols` <a name="ResetBucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols"></a>

```csharp
private void ResetBucketCols()
```

##### `ResetCompressed` <a name="ResetCompressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetCompressed"></a>

```csharp
private void ResetCompressed()
```

##### `ResetInputFormat` <a name="ResetInputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat"></a>

```csharp
private void ResetInputFormat()
```

##### `ResetLocationUri` <a name="ResetLocationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri"></a>

```csharp
private void ResetLocationUri()
```

##### `ResetNumBuckets` <a name="ResetNumBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets"></a>

```csharp
private void ResetNumBuckets()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat"></a>

```csharp
private void ResetOutputFormat()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSerdeInfo` <a name="ResetSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo"></a>

```csharp
private void ResetSerdeInfo()
```

##### `ResetSkewedInfo` <a name="ResetSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo"></a>

```csharp
private void ResetSkewedInfo()
```

##### `ResetSortCols` <a name="ResetSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSortCols"></a>

```csharp
private void ResetSortCols()
```

##### `ResetStoredAsSubDirs` <a name="ResetStoredAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs"></a>

```csharp
private void ResetStoredAsSubDirs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList">BiglakeHiveTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortCols">SortCols</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList">BiglakeHiveTableStorageDescriptorSortColsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput">BucketColsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput">CompressedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput">InputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput">LocationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput">NumBucketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput">SerdeInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput">SkewedInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput">SortColsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput">StoredAsSubDirsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols">BucketCols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressed">Compressed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUri">LocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets">NumBuckets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs">StoredAsSubDirs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columns"></a>

```csharp
public BiglakeHiveTableStorageDescriptorColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList">BiglakeHiveTableStorageDescriptorColumnsList</a>

---

##### `SerdeInfo`<sup>Required</sup> <a name="SerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo"></a>

```csharp
public BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference SerdeInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a>

---

##### `SkewedInfo`<sup>Required</sup> <a name="SkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```csharp
public BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference SkewedInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a>

---

##### `SortCols`<sup>Required</sup> <a name="SortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortCols"></a>

```csharp
public BiglakeHiveTableStorageDescriptorSortColsList SortCols { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList">BiglakeHiveTableStorageDescriptorSortColsList</a>

---

##### `BucketColsInput`<sup>Optional</sup> <a name="BucketColsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput"></a>

```csharp
public string[] BucketColsInput { get; }
```

- *Type:* string[]

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorColumns[] ColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns">BiglakeHiveTableStorageDescriptorColumns</a>[]

---

##### `CompressedInput`<sup>Optional</sup> <a name="CompressedInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput"></a>

```csharp
public bool|IResolvable CompressedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InputFormatInput`<sup>Optional</sup> <a name="InputFormatInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput"></a>

```csharp
public string InputFormatInput { get; }
```

- *Type:* string

---

##### `LocationUriInput`<sup>Optional</sup> <a name="LocationUriInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput"></a>

```csharp
public string LocationUriInput { get; }
```

- *Type:* string

---

##### `NumBucketsInput`<sup>Optional</sup> <a name="NumBucketsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput"></a>

```csharp
public double NumBucketsInput { get; }
```

- *Type:* double

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SerdeInfoInput`<sup>Optional</sup> <a name="SerdeInfoInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```csharp
public BiglakeHiveTableStorageDescriptorSerdeInfo SerdeInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---

##### `SkewedInfoInput`<sup>Optional</sup> <a name="SkewedInfoInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```csharp
public BiglakeHiveTableStorageDescriptorSkewedInfo SkewedInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---

##### `SortColsInput`<sup>Optional</sup> <a name="SortColsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSortCols[] SortColsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]

---

##### `StoredAsSubDirsInput`<sup>Optional</sup> <a name="StoredAsSubDirsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput"></a>

```csharp
public bool|IResolvable StoredAsSubDirsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BucketCols`<sup>Required</sup> <a name="BucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols"></a>

```csharp
public string[] BucketCols { get; }
```

- *Type:* string[]

---

##### `Compressed`<sup>Required</sup> <a name="Compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressed"></a>

```csharp
public bool|IResolvable Compressed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat"></a>

```csharp
public string InputFormat { get; }
```

- *Type:* string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUri"></a>

```csharp
public string LocationUri { get; }
```

- *Type:* string

---

##### `NumBuckets`<sup>Required</sup> <a name="NumBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets"></a>

```csharp
public double NumBuckets { get; }
```

- *Type:* double

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StoredAsSubDirs`<sup>Required</sup> <a name="StoredAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs"></a>

```csharp
public bool|IResolvable StoredAsSubDirs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.internalValue"></a>

```csharp
public BiglakeHiveTableStorageDescriptor InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---


### BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference <a name="BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass">ResetDeserializerClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType">ResetSerdeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass">ResetSerializerClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDeserializerClass` <a name="ResetDeserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass"></a>

```csharp
private void ResetDeserializerClass()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSerdeType` <a name="ResetSerdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType"></a>

```csharp
private void ResetSerdeType()
```

##### `ResetSerializerClass` <a name="ResetSerializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass"></a>

```csharp
private void ResetSerializerClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput">DeserializerClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput">SerdeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput">SerializationLibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput">SerializerClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass">DeserializerClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType">SerdeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib">SerializationLib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass">SerializerClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DeserializerClassInput`<sup>Optional</sup> <a name="DeserializerClassInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput"></a>

```csharp
public string DeserializerClassInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SerdeTypeInput`<sup>Optional</sup> <a name="SerdeTypeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput"></a>

```csharp
public string SerdeTypeInput { get; }
```

- *Type:* string

---

##### `SerializationLibInput`<sup>Optional</sup> <a name="SerializationLibInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput"></a>

```csharp
public string SerializationLibInput { get; }
```

- *Type:* string

---

##### `SerializerClassInput`<sup>Optional</sup> <a name="SerializerClassInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput"></a>

```csharp
public string SerializerClassInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeserializerClass`<sup>Required</sup> <a name="DeserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass"></a>

```csharp
public string DeserializerClass { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SerdeType`<sup>Required</sup> <a name="SerdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType"></a>

```csharp
public string SerdeType { get; }
```

- *Type:* string

---

##### `SerializationLib`<sup>Required</sup> <a name="SerializationLib" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib"></a>

```csharp
public string SerializationLib { get; }
```

- *Type:* string

---

##### `SerializerClass`<sup>Required</sup> <a name="SerializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass"></a>

```csharp
public string SerializerClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```csharp
public BiglakeHiveTableStorageDescriptorSerdeInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues">PutSkewedColValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations">PutSkewedKeyValuesLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSkewedColValues` <a name="PutSkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues"></a>

```csharp
private void PutSkewedColValues(IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]

---

##### `PutSkewedKeyValuesLocations` <a name="PutSkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations"></a>

```csharp
private void PutSkewedKeyValuesLocations(IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues">SkewedColValues</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations">SkewedKeyValuesLocations</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput">SkewedColNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput">SkewedColValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput">SkewedKeyValuesLocationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames">SkewedColNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SkewedColValues`<sup>Required</sup> <a name="SkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues"></a>

```csharp
public BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList SkewedColValues { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a>

---

##### `SkewedKeyValuesLocations`<sup>Required</sup> <a name="SkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations"></a>

```csharp
public BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList SkewedKeyValuesLocations { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a>

---

##### `SkewedColNamesInput`<sup>Optional</sup> <a name="SkewedColNamesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput"></a>

```csharp
public string[] SkewedColNamesInput { get; }
```

- *Type:* string[]

---

##### `SkewedColValuesInput`<sup>Optional</sup> <a name="SkewedColValuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[] SkewedColValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]

---

##### `SkewedKeyValuesLocationsInput`<sup>Optional</sup> <a name="SkewedKeyValuesLocationsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[] SkewedKeyValuesLocationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]

---

##### `SkewedColNames`<sup>Required</sup> <a name="SkewedColNames" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames"></a>

```csharp
public string[] SkewedColNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```csharp
public BiglakeHiveTableStorageDescriptorSkewedInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get"></a>

```csharp
private BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>[]

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get"></a>

```csharp
private BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>[]

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>

---


### BiglakeHiveTableStorageDescriptorSortColsList <a name="BiglakeHiveTableStorageDescriptorSortColsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSortColsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get"></a>

```csharp
private BiglakeHiveTableStorageDescriptorSortColsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSortCols[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>[]

---


### BiglakeHiveTableStorageDescriptorSortColsOutputReference <a name="BiglakeHiveTableStorageDescriptorSortColsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableStorageDescriptorSortColsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput">ColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col">Col</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColInput`<sup>Optional</sup> <a name="ColInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput"></a>

```csharp
public string ColInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `Col`<sup>Required</sup> <a name="Col" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col"></a>

```csharp
public string Col { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveTableStorageDescriptorSortCols InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols">BiglakeHiveTableStorageDescriptorSortCols</a>

---


### BiglakeHiveTableTimeoutsOutputReference <a name="BiglakeHiveTableTimeoutsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BiglakeHiveTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BiglakeHiveTableTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---



