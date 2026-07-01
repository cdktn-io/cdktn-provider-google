# `migrationCenterImportJob` Submodule <a name="`migrationCenterImportJob` Submodule" id="@cdktn/provider-google.migrationCenterImportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterImportJob <a name="MigrationCenterImportJob" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job google_migration_center_import_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJob(Construct Scope, string Id, MigrationCenterImportJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig">MigrationCenterImportJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig">MigrationCenterImportJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.putTimeouts"></a>

```csharp
private void PutTimeouts(MigrationCenterImportJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MigrationCenterImportJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterImportJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterImportJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterImportJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

MigrationCenterImportJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MigrationCenterImportJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MigrationCenterImportJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MigrationCenterImportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterImportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.completeTime">CompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.executionReport">ExecutionReport</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList">MigrationCenterImportJobExecutionReportList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference">MigrationCenterImportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.validationReport">ValidationReport</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList">MigrationCenterImportJobValidationReportList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSourceInput">AssetSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobIdInput">ImportJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSource">AssetSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobId">ImportJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CompleteTime`<sup>Required</sup> <a name="CompleteTime" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.completeTime"></a>

```csharp
public string CompleteTime { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ExecutionReport`<sup>Required</sup> <a name="ExecutionReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.executionReport"></a>

```csharp
public MigrationCenterImportJobExecutionReportList ExecutionReport { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList">MigrationCenterImportJobExecutionReportList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeouts"></a>

```csharp
public MigrationCenterImportJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference">MigrationCenterImportJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ValidationReport`<sup>Required</sup> <a name="ValidationReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.validationReport"></a>

```csharp
public MigrationCenterImportJobValidationReportList ValidationReport { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList">MigrationCenterImportJobValidationReportList</a>

---

##### `AssetSourceInput`<sup>Optional</sup> <a name="AssetSourceInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSourceInput"></a>

```csharp
public string AssetSourceInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportJobIdInput`<sup>Optional</sup> <a name="ImportJobIdInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobIdInput"></a>

```csharp
public string ImportJobIdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeoutsInput"></a>

```csharp
public IResolvable|MigrationCenterImportJobTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a>

---

##### `AssetSource`<sup>Required</sup> <a name="AssetSource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSource"></a>

```csharp
public string AssetSource { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportJobId`<sup>Required</sup> <a name="ImportJobId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobId"></a>

```csharp
public string ImportJobId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterImportJobConfig <a name="MigrationCenterImportJobConfig" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AssetSource,
    string ImportJobId,
    string Location,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    MigrationCenterImportJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.assetSource">AssetSource</a></code> | <code>string</code> | Reference to a source. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.importJobId">ImportJobId</a></code> | <code>string</code> | ID of the import job. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-friendly display name. Maximum length is 256 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#id MigrationCenterImportJob#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#project MigrationCenterImportJob#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssetSource`<sup>Required</sup> <a name="AssetSource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.assetSource"></a>

```csharp
public string AssetSource { get; set; }
```

- *Type:* string

Reference to a source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#asset_source MigrationCenterImportJob#asset_source}

---

##### `ImportJobId`<sup>Required</sup> <a name="ImportJobId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.importJobId"></a>

```csharp
public string ImportJobId { get; set; }
```

- *Type:* string

ID of the import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#import_job_id MigrationCenterImportJob#import_job_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#location MigrationCenterImportJob#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#deletion_policy MigrationCenterImportJob#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-friendly display name. Maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#display_name MigrationCenterImportJob#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#id MigrationCenterImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#labels MigrationCenterImportJob#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#project MigrationCenterImportJob#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.timeouts"></a>

```csharp
public MigrationCenterImportJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#timeouts MigrationCenterImportJob#timeouts}

---

### MigrationCenterImportJobExecutionReport <a name="MigrationCenterImportJobExecutionReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReport {

};
```


### MigrationCenterImportJobExecutionReportExecutionErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrors {

};
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations {

};
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors {

};
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors {

};
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError {

};
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError {

};
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError {

};
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors {

};
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError {

};
```


### MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors {

};
```


### MigrationCenterImportJobTimeouts <a name="MigrationCenterImportJobTimeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#create MigrationCenterImportJob#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#delete MigrationCenterImportJob#delete}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#update MigrationCenterImportJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#create MigrationCenterImportJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#delete MigrationCenterImportJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/migration_center_import_job#update MigrationCenterImportJob#update}.

---

### MigrationCenterImportJobValidationReport <a name="MigrationCenterImportJobValidationReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReport {

};
```


### MigrationCenterImportJobValidationReportFileValidations <a name="MigrationCenterImportJobValidationReportFileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidations {

};
```


### MigrationCenterImportJobValidationReportFileValidationsFileErrors <a name="MigrationCenterImportJobValidationReportFileValidationsFileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsFileErrors {

};
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrors <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrors {

};
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError {

};
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError {

};
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError {

};
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors {

};
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError {

};
```


### MigrationCenterImportJobValidationReportJobErrors <a name="MigrationCenterImportJobValidationReportJobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportJobErrors {

};
```


## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get"></a>

```csharp
private MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get"></a>

```csharp
private MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileErrors">FileErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.partialReport">PartialReport</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.rowErrors">RowErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileErrors`<sup>Required</sup> <a name="FileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileErrors"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList FileErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList</a>

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `PartialReport`<sup>Required</sup> <a name="PartialReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.partialReport"></a>

```csharp
public IResolvable PartialReport { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RowErrors`<sup>Required</sup> <a name="RowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.rowErrors"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList RowErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get"></a>

```csharp
private MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get"></a>

```csharp
private MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList CsvError { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList</a>

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get"></a>

```csharp
private MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get"></a>

```csharp
private MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get"></a>

```csharp
private MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.archiveError">ArchiveError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.assetTitle">AssetTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmName">VmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmUuid">VmUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.xlsxError">XlsxError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveError`<sup>Required</sup> <a name="ArchiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.archiveError"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList ArchiveError { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList</a>

---

##### `AssetTitle`<sup>Required</sup> <a name="AssetTitle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.assetTitle"></a>

```csharp
public string AssetTitle { get; }
```

- *Type:* string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.csvError"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList CsvError { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.errors"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList</a>

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `VmName`<sup>Required</sup> <a name="VmName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmName"></a>

```csharp
public string VmName { get; }
```

- *Type:* string

---

##### `VmUuid`<sup>Required</sup> <a name="VmUuid" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmUuid"></a>

```csharp
public string VmUuid { get; }
```

- *Type:* string

---

##### `XlsxError`<sup>Required</sup> <a name="XlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.xlsxError"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList XlsxError { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get"></a>

```csharp
private MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet">Sheet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `Sheet`<sup>Required</sup> <a name="Sheet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet"></a>

```csharp
public string Sheet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get"></a>

```csharp
private MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.get"></a>

```csharp
private MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fileValidations">FileValidations</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.jobErrors">JobErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors">MigrationCenterImportJobExecutionReportExecutionErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileValidations`<sup>Required</sup> <a name="FileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fileValidations"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList FileValidations { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList</a>

---

##### `JobErrors`<sup>Required</sup> <a name="JobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.jobErrors"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList JobErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors">MigrationCenterImportJobExecutionReportExecutionErrors</a>

---


### MigrationCenterImportJobExecutionReportList <a name="MigrationCenterImportJobExecutionReportList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.get"></a>

```csharp
private MigrationCenterImportJobExecutionReportOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobExecutionReportOutputReference <a name="MigrationCenterImportJobExecutionReportOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobExecutionReportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.executionErrors">ExecutionErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.framesReported">FramesReported</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.totalRowsCount">TotalRowsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport">MigrationCenterImportJobExecutionReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionErrors`<sup>Required</sup> <a name="ExecutionErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.executionErrors"></a>

```csharp
public MigrationCenterImportJobExecutionReportExecutionErrorsList ExecutionErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsList</a>

---

##### `FramesReported`<sup>Required</sup> <a name="FramesReported" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.framesReported"></a>

```csharp
public double FramesReported { get; }
```

- *Type:* double

---

##### `TotalRowsCount`<sup>Required</sup> <a name="TotalRowsCount" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.totalRowsCount"></a>

```csharp
public double TotalRowsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobExecutionReport InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport">MigrationCenterImportJobExecutionReport</a>

---


### MigrationCenterImportJobTimeoutsOutputReference <a name="MigrationCenterImportJobTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MigrationCenterImportJobTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a>

---


### MigrationCenterImportJobValidationReportFileValidationsFileErrorsList <a name="MigrationCenterImportJobValidationReportFileValidationsFileErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsFileErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get"></a>

```csharp
private MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors">MigrationCenterImportJobValidationReportFileValidationsFileErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsFileErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors">MigrationCenterImportJobValidationReportFileValidationsFileErrors</a>

---


### MigrationCenterImportJobValidationReportFileValidationsList <a name="MigrationCenterImportJobValidationReportFileValidationsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.get"></a>

```csharp
private MigrationCenterImportJobValidationReportFileValidationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobValidationReportFileValidationsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileErrors">FileErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList">MigrationCenterImportJobValidationReportFileValidationsFileErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.partialReport">PartialReport</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.rowErrors">RowErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations">MigrationCenterImportJobValidationReportFileValidations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileErrors`<sup>Required</sup> <a name="FileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileErrors"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsFileErrorsList FileErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList">MigrationCenterImportJobValidationReportFileValidationsFileErrorsList</a>

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `PartialReport`<sup>Required</sup> <a name="PartialReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.partialReport"></a>

```csharp
public IResolvable PartialReport { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RowErrors`<sup>Required</sup> <a name="RowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.rowErrors"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsList RowErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations">MigrationCenterImportJobValidationReportFileValidations</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get"></a>

```csharp
private MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get"></a>

```csharp
private MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList CsvError { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList</a>

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get"></a>

```csharp
private MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get"></a>

```csharp
private MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get"></a>

```csharp
private MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.archiveError">ArchiveError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.assetTitle">AssetTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmName">VmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmUuid">VmUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.xlsxError">XlsxError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveError`<sup>Required</sup> <a name="ArchiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.archiveError"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList ArchiveError { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList</a>

---

##### `AssetTitle`<sup>Required</sup> <a name="AssetTitle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.assetTitle"></a>

```csharp
public string AssetTitle { get; }
```

- *Type:* string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.csvError"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList CsvError { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.errors"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList</a>

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `VmName`<sup>Required</sup> <a name="VmName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmName"></a>

```csharp
public string VmName { get; }
```

- *Type:* string

---

##### `VmUuid`<sup>Required</sup> <a name="VmUuid" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmUuid"></a>

```csharp
public string VmUuid { get; }
```

- *Type:* string

---

##### `XlsxError`<sup>Required</sup> <a name="XlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.xlsxError"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList XlsxError { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrors</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get"></a>

```csharp
private MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet">Sheet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber"></a>

```csharp
public double RowNumber { get; }
```

- *Type:* double

---

##### `Sheet`<sup>Required</sup> <a name="Sheet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet"></a>

```csharp
public string Sheet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError</a>

---


### MigrationCenterImportJobValidationReportJobErrorsList <a name="MigrationCenterImportJobValidationReportJobErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportJobErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.get"></a>

```csharp
private MigrationCenterImportJobValidationReportJobErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobValidationReportJobErrorsOutputReference <a name="MigrationCenterImportJobValidationReportJobErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportJobErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors">MigrationCenterImportJobValidationReportJobErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobValidationReportJobErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors">MigrationCenterImportJobValidationReportJobErrors</a>

---


### MigrationCenterImportJobValidationReportList <a name="MigrationCenterImportJobValidationReportList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.get"></a>

```csharp
private MigrationCenterImportJobValidationReportOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MigrationCenterImportJobValidationReportOutputReference <a name="MigrationCenterImportJobValidationReportOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new MigrationCenterImportJobValidationReportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fileValidations">FileValidations</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList">MigrationCenterImportJobValidationReportFileValidationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.jobErrors">JobErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList">MigrationCenterImportJobValidationReportJobErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport">MigrationCenterImportJobValidationReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileValidations`<sup>Required</sup> <a name="FileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fileValidations"></a>

```csharp
public MigrationCenterImportJobValidationReportFileValidationsList FileValidations { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList">MigrationCenterImportJobValidationReportFileValidationsList</a>

---

##### `JobErrors`<sup>Required</sup> <a name="JobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.jobErrors"></a>

```csharp
public MigrationCenterImportJobValidationReportJobErrorsList JobErrors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList">MigrationCenterImportJobValidationReportJobErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.internalValue"></a>

```csharp
public MigrationCenterImportJobValidationReport InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport">MigrationCenterImportJobValidationReport</a>

---



