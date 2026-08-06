# `chronicleParser` Submodule <a name="`chronicleParser` Submodule" id="@cdktn/provider-google.chronicleParser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleParser <a name="ChronicleParser" id="@cdktn/provider-google.chronicleParser.ChronicleParser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser google_chronicle_parser}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParser(Construct Scope, string Id, ChronicleParserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig">ChronicleParserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig">ChronicleParserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.putLowCode">PutLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.putVersionInfo">PutVersionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetCbn">ResetCbn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetLowCode">ResetLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidatedOnEmptyLogs">ResetValidatedOnEmptyLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidationSkipped">ResetValidationSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetVersionInfo">ResetVersionInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleParser.ChronicleParser.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.chronicleParser.ChronicleParser.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleParser.ChronicleParser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLowCode` <a name="PutLowCode" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putLowCode"></a>

```csharp
private void PutLowCode(ChronicleParserLowCode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putLowCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putTimeouts"></a>

```csharp
private void PutTimeouts(ChronicleParserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

---

##### `PutVersionInfo` <a name="PutVersionInfo" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putVersionInfo"></a>

```csharp
private void PutVersionInfo(ChronicleParserVersionInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putVersionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

---

##### `ResetCbn` <a name="ResetCbn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetCbn"></a>

```csharp
private void ResetCbn()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLowCode` <a name="ResetLowCode" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetLowCode"></a>

```csharp
private void ResetLowCode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidatedOnEmptyLogs` <a name="ResetValidatedOnEmptyLogs" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidatedOnEmptyLogs"></a>

```csharp
private void ResetValidatedOnEmptyLogs()
```

##### `ResetValidationSkipped` <a name="ResetValidationSkipped" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidationSkipped"></a>

```csharp
private void ResetValidationSkipped()
```

##### `ResetVersionInfo` <a name="ResetVersionInfo" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetVersionInfo"></a>

```csharp
private void ResetVersionInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleParser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleParser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleParser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleParser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleParser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChronicleParser resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleParser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleParser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleParser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.changelogs">Changelogs</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList">ChronicleParserChangelogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.creator">Creator</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList">ChronicleParserCreatorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.dynamicParsingConfig">DynamicParsingConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCode">LowCode</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference">ChronicleParserLowCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.parser">Parser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.parserExtension">ParserExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.releaseStage">ReleaseStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference">ChronicleParserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationReport">ValidationReport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationStage">ValidationStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfo">VersionInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference">ChronicleParserVersionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbnInput">CbnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtypeInput">LogtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCodeInput">LowCodeInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogsInput">ValidatedOnEmptyLogsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkippedInput">ValidationSkippedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfoInput">VersionInfoInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbn">Cbn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtype">Logtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogs">ValidatedOnEmptyLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkipped">ValidationSkipped</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Changelogs`<sup>Required</sup> <a name="Changelogs" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.changelogs"></a>

```csharp
public ChronicleParserChangelogsList Changelogs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList">ChronicleParserChangelogsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.creator"></a>

```csharp
public ChronicleParserCreatorList Creator { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList">ChronicleParserCreatorList</a>

---

##### `DynamicParsingConfig`<sup>Required</sup> <a name="DynamicParsingConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.dynamicParsingConfig"></a>

```csharp
public string DynamicParsingConfig { get; }
```

- *Type:* string

---

##### `LowCode`<sup>Required</sup> <a name="LowCode" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCode"></a>

```csharp
public ChronicleParserLowCodeOutputReference LowCode { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference">ChronicleParserLowCodeOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parser`<sup>Required</sup> <a name="Parser" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.parser"></a>

```csharp
public string Parser { get; }
```

- *Type:* string

---

##### `ParserExtension`<sup>Required</sup> <a name="ParserExtension" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.parserExtension"></a>

```csharp
public string ParserExtension { get; }
```

- *Type:* string

---

##### `ReleaseStage`<sup>Required</sup> <a name="ReleaseStage" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.releaseStage"></a>

```csharp
public string ReleaseStage { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeouts"></a>

```csharp
public ChronicleParserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference">ChronicleParserTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ValidationReport`<sup>Required</sup> <a name="ValidationReport" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationReport"></a>

```csharp
public string ValidationReport { get; }
```

- *Type:* string

---

##### `ValidationStage`<sup>Required</sup> <a name="ValidationStage" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationStage"></a>

```csharp
public string ValidationStage { get; }
```

- *Type:* string

---

##### `VersionInfo`<sup>Required</sup> <a name="VersionInfo" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfo"></a>

```csharp
public ChronicleParserVersionInfoOutputReference VersionInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference">ChronicleParserVersionInfoOutputReference</a>

---

##### `CbnInput`<sup>Optional</sup> <a name="CbnInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbnInput"></a>

```csharp
public string CbnInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LogtypeInput`<sup>Optional</sup> <a name="LogtypeInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtypeInput"></a>

```csharp
public string LogtypeInput { get; }
```

- *Type:* string

---

##### `LowCodeInput`<sup>Optional</sup> <a name="LowCodeInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCodeInput"></a>

```csharp
public ChronicleParserLowCode LowCodeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeoutsInput"></a>

```csharp
public IResolvable|ChronicleParserTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

---

##### `ValidatedOnEmptyLogsInput`<sup>Optional</sup> <a name="ValidatedOnEmptyLogsInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogsInput"></a>

```csharp
public bool|IResolvable ValidatedOnEmptyLogsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidationSkippedInput`<sup>Optional</sup> <a name="ValidationSkippedInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkippedInput"></a>

```csharp
public bool|IResolvable ValidationSkippedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VersionInfoInput`<sup>Optional</sup> <a name="VersionInfoInput" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfoInput"></a>

```csharp
public ChronicleParserVersionInfo VersionInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

---

##### `Cbn`<sup>Required</sup> <a name="Cbn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbn"></a>

```csharp
public string Cbn { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Logtype`<sup>Required</sup> <a name="Logtype" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtype"></a>

```csharp
public string Logtype { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ValidatedOnEmptyLogs`<sup>Required</sup> <a name="ValidatedOnEmptyLogs" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogs"></a>

```csharp
public bool|IResolvable ValidatedOnEmptyLogs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidationSkipped`<sup>Required</sup> <a name="ValidationSkipped" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkipped"></a>

```csharp
public bool|IResolvable ValidationSkipped { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleParserChangelogs <a name="ChronicleParserChangelogs" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserChangelogs {

};
```


### ChronicleParserChangelogsEntries <a name="ChronicleParserChangelogsEntries" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserChangelogsEntries {

};
```


### ChronicleParserConfig <a name="ChronicleParserConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Instance,
    string Location,
    string Logtype,
    string Cbn = null,
    string DeletionPolicy = null,
    string Id = null,
    ChronicleParserLowCode LowCode = null,
    string Project = null,
    ChronicleParserTimeouts Timeouts = null,
    bool|IResolvable ValidatedOnEmptyLogs = null,
    bool|IResolvable ValidationSkipped = null,
    ChronicleParserVersionInfo VersionInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.instance">Instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.logtype">Logtype</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.cbn">Cbn</a></code> | <code>string</code> | if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#id ChronicleParser#id}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lowCode">LowCode</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a></code> | low_code block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#project ChronicleParser#project}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validatedOnEmptyLogs">ValidatedOnEmptyLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Flag to bypass parser validation when no logs are found. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validationSkipped">ValidationSkipped</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.versionInfo">VersionInfo</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a></code> | version_info block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#instance ChronicleParser#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#location ChronicleParser#location}

---

##### `Logtype`<sup>Required</sup> <a name="Logtype" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.logtype"></a>

```csharp
public string Logtype { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#logtype ChronicleParser#logtype}

---

##### `Cbn`<sup>Optional</sup> <a name="Cbn" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.cbn"></a>

```csharp
public string Cbn { get; set; }
```

- *Type:* string

if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#cbn ChronicleParser#cbn}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#deletion_policy ChronicleParser#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#id ChronicleParser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LowCode`<sup>Optional</sup> <a name="LowCode" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lowCode"></a>

```csharp
public ChronicleParserLowCode LowCode { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

low_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#low_code ChronicleParser#low_code}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#project ChronicleParser#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.timeouts"></a>

```csharp
public ChronicleParserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#timeouts ChronicleParser#timeouts}

---

##### `ValidatedOnEmptyLogs`<sup>Optional</sup> <a name="ValidatedOnEmptyLogs" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validatedOnEmptyLogs"></a>

```csharp
public bool|IResolvable ValidatedOnEmptyLogs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Flag to bypass parser validation when no logs are found.

If enabled, the parser won't be be rejected during the validation
phase when no logs are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#validated_on_empty_logs ChronicleParser#validated_on_empty_logs}

---

##### `ValidationSkipped`<sup>Optional</sup> <a name="ValidationSkipped" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validationSkipped"></a>

```csharp
public bool|IResolvable ValidationSkipped { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#validation_skipped ChronicleParser#validation_skipped}

---

##### `VersionInfo`<sup>Optional</sup> <a name="VersionInfo" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.versionInfo"></a>

```csharp
public ChronicleParserVersionInfo VersionInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

version_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#version_info ChronicleParser#version_info}

---

### ChronicleParserCreator <a name="ChronicleParserCreator" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserCreator {

};
```


### ChronicleParserLowCode <a name="ChronicleParserLowCode" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserLowCode {
    ChronicleParserLowCodeFieldExtractors FieldExtractors = null,
    string Log = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.fieldExtractors">FieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.log">Log</a></code> | <code>string</code> | The log used to create this low code parser in the UI. |

---

##### `FieldExtractors`<sup>Optional</sup> <a name="FieldExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.fieldExtractors"></a>

```csharp
public ChronicleParserLowCodeFieldExtractors FieldExtractors { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#field_extractors ChronicleParser#field_extractors}

---

##### `Log`<sup>Optional</sup> <a name="Log" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.log"></a>

```csharp
public string Log { get; set; }
```

- *Type:* string

The log used to create this low code parser in the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#log ChronicleParser#log}

---

### ChronicleParserLowCodeFieldExtractors <a name="ChronicleParserLowCodeFieldExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserLowCodeFieldExtractors {
    bool|IResolvable AppendRepeatedFields = null,
    IResolvable|ChronicleParserLowCodeFieldExtractorsExtractors[] Extractors = null,
    string LogFormat = null,
    ChronicleParserLowCodeFieldExtractorsPreprocessConfig PreprocessConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields">AppendRepeatedFields</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.extractors">Extractors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]</code> | extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.logFormat">LogFormat</a></code> | <code>string</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.preprocessConfig">PreprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `AppendRepeatedFields`<sup>Optional</sup> <a name="AppendRepeatedFields" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields"></a>

```csharp
public bool|IResolvable AppendRepeatedFields { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#append_repeated_fields ChronicleParser#append_repeated_fields}

---

##### `Extractors`<sup>Optional</sup> <a name="Extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.extractors"></a>

```csharp
public IResolvable|ChronicleParserLowCodeFieldExtractorsExtractors[] Extractors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#extractors ChronicleParser#extractors}

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.logFormat"></a>

```csharp
public string LogFormat { get; set; }
```

- *Type:* string

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#log_format ChronicleParser#log_format}

---

##### `PreprocessConfig`<sup>Optional</sup> <a name="PreprocessConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.preprocessConfig"></a>

```csharp
public ChronicleParserLowCodeFieldExtractorsPreprocessConfig PreprocessConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#preprocess_config ChronicleParser#preprocess_config}

---

### ChronicleParserLowCodeFieldExtractorsExtractors <a name="ChronicleParserLowCodeFieldExtractorsExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserLowCodeFieldExtractorsExtractors {
    string DestinationPath = null,
    string FieldPath = null,
    string PreconditionOp = null,
    string PreconditionPath = null,
    string PreconditionValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath">DestinationPath</a></code> | <code>string</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath">FieldPath</a></code> | <code>string</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp">PreconditionOp</a></code> | <code>string</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath">PreconditionPath</a></code> | <code>string</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue">PreconditionValue</a></code> | <code>string</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.value">Value</a></code> | <code>string</code> | Value to be mapped to the destination path directly. |

---

##### `DestinationPath`<sup>Optional</sup> <a name="DestinationPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath"></a>

```csharp
public string DestinationPath { get; set; }
```

- *Type:* string

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#destination_path ChronicleParser#destination_path}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath"></a>

```csharp
public string FieldPath { get; set; }
```

- *Type:* string

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#field_path ChronicleParser#field_path}

---

##### `PreconditionOp`<sup>Optional</sup> <a name="PreconditionOp" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp"></a>

```csharp
public string PreconditionOp { get; set; }
```

- *Type:* string

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#precondition_op ChronicleParser#precondition_op}

---

##### `PreconditionPath`<sup>Optional</sup> <a name="PreconditionPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath"></a>

```csharp
public string PreconditionPath { get; set; }
```

- *Type:* string

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#precondition_path ChronicleParser#precondition_path}

---

##### `PreconditionValue`<sup>Optional</sup> <a name="PreconditionValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue"></a>

```csharp
public string PreconditionValue { get; set; }
```

- *Type:* string

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#precondition_value ChronicleParser#precondition_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#value ChronicleParser#value}

---

### ChronicleParserLowCodeFieldExtractorsPreprocessConfig <a name="ChronicleParserLowCodeFieldExtractorsPreprocessConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserLowCodeFieldExtractorsPreprocessConfig {
    string GrokRegex = null,
    string Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex">GrokRegex</a></code> | <code>string</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target">Target</a></code> | <code>string</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `GrokRegex`<sup>Optional</sup> <a name="GrokRegex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```csharp
public string GrokRegex { get; set; }
```

- *Type:* string

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#grok_regex ChronicleParser#grok_regex}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#target ChronicleParser#target}

---

### ChronicleParserTimeouts <a name="ChronicleParserTimeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#create ChronicleParser#create}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#delete ChronicleParser#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#update ChronicleParser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#create ChronicleParser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#delete ChronicleParser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#update ChronicleParser#update}.

---

### ChronicleParserVersionInfo <a name="ChronicleParserVersionInfo" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserVersionInfo {
    bool|IResolvable AutoUpgradeDisabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo.property.autoUpgradeDisabled">AutoUpgradeDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Signifies if the parser is disabled for auto upgrade. |

---

##### `AutoUpgradeDisabled`<sup>Required</sup> <a name="AutoUpgradeDisabled" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo.property.autoUpgradeDisabled"></a>

```csharp
public bool|IResolvable AutoUpgradeDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Signifies if the parser is disabled for auto upgrade.

If true, the parser
will not be upgraded by the auto upgrade process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_parser#auto_upgrade_disabled ChronicleParser#auto_upgrade_disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleParserChangelogsEntriesList <a name="ChronicleParserChangelogsEntriesList" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserChangelogsEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.get"></a>

```csharp
private ChronicleParserChangelogsEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ChronicleParserChangelogsEntriesOutputReference <a name="ChronicleParserChangelogsEntriesOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserChangelogsEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.changeMessage">ChangeMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.deleted">Deleted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.parserVersion">ParserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries">ChronicleParserChangelogsEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangeMessage`<sup>Required</sup> <a name="ChangeMessage" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.changeMessage"></a>

```csharp
public string ChangeMessage { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.deleted"></a>

```csharp
public IResolvable Deleted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ParserVersion`<sup>Required</sup> <a name="ParserVersion" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.parserVersion"></a>

```csharp
public string ParserVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.internalValue"></a>

```csharp
public ChronicleParserChangelogsEntries InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries">ChronicleParserChangelogsEntries</a>

---


### ChronicleParserChangelogsList <a name="ChronicleParserChangelogsList" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserChangelogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.get"></a>

```csharp
private ChronicleParserChangelogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ChronicleParserChangelogsOutputReference <a name="ChronicleParserChangelogsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserChangelogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.entries">Entries</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList">ChronicleParserChangelogsEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs">ChronicleParserChangelogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.entries"></a>

```csharp
public ChronicleParserChangelogsEntriesList Entries { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList">ChronicleParserChangelogsEntriesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.internalValue"></a>

```csharp
public ChronicleParserChangelogs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs">ChronicleParserChangelogs</a>

---


### ChronicleParserCreatorList <a name="ChronicleParserCreatorList" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserCreatorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.get"></a>

```csharp
private ChronicleParserCreatorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ChronicleParserCreatorOutputReference <a name="ChronicleParserCreatorOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserCreatorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.author">Author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.customer">Customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreator">ChronicleParserCreator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.author"></a>

```csharp
public string Author { get; }
```

- *Type:* string

---

##### `Customer`<sup>Required</sup> <a name="Customer" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.customer"></a>

```csharp
public string Customer { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.internalValue"></a>

```csharp
public ChronicleParserCreator InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreator">ChronicleParserCreator</a>

---


### ChronicleParserLowCodeFieldExtractorsExtractorsList <a name="ChronicleParserLowCodeFieldExtractorsExtractorsList" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserLowCodeFieldExtractorsExtractorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.get"></a>

```csharp
private ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue"></a>

```csharp
public IResolvable|ChronicleParserLowCodeFieldExtractorsExtractors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]

---


### ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference <a name="ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath">ResetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp">ResetPreconditionOp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath">ResetPreconditionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue">ResetPreconditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPath` <a name="ResetDestinationPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```csharp
private void ResetDestinationPath()
```

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```csharp
private void ResetFieldPath()
```

##### `ResetPreconditionOp` <a name="ResetPreconditionOp" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```csharp
private void ResetPreconditionOp()
```

##### `ResetPreconditionPath` <a name="ResetPreconditionPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```csharp
private void ResetPreconditionPath()
```

##### `ResetPreconditionValue` <a name="ResetPreconditionValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```csharp
private void ResetPreconditionValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">PreconditionOpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">PreconditionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">PreconditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath">DestinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath">FieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp">PreconditionOp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath">PreconditionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue">PreconditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```csharp
public string DestinationPathInput { get; }
```

- *Type:* string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```csharp
public string FieldPathInput { get; }
```

- *Type:* string

---

##### `PreconditionOpInput`<sup>Optional</sup> <a name="PreconditionOpInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```csharp
public string PreconditionOpInput { get; }
```

- *Type:* string

---

##### `PreconditionPathInput`<sup>Optional</sup> <a name="PreconditionPathInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```csharp
public string PreconditionPathInput { get; }
```

- *Type:* string

---

##### `PreconditionValueInput`<sup>Optional</sup> <a name="PreconditionValueInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```csharp
public string PreconditionValueInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```csharp
public string DestinationPath { get; }
```

- *Type:* string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```csharp
public string FieldPath { get; }
```

- *Type:* string

---

##### `PreconditionOp`<sup>Required</sup> <a name="PreconditionOp" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```csharp
public string PreconditionOp { get; }
```

- *Type:* string

---

##### `PreconditionPath`<sup>Required</sup> <a name="PreconditionPath" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```csharp
public string PreconditionPath { get; }
```

- *Type:* string

---

##### `PreconditionValue`<sup>Required</sup> <a name="PreconditionValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```csharp
public string PreconditionValue { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleParserLowCodeFieldExtractorsExtractors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>

---


### ChronicleParserLowCodeFieldExtractorsOutputReference <a name="ChronicleParserLowCodeFieldExtractorsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserLowCodeFieldExtractorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors">PutExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig">PutPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields">ResetAppendRepeatedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors">ResetExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig">ResetPreprocessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtractors` <a name="PutExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors"></a>

```csharp
private void PutExtractors(IResolvable|ChronicleParserLowCodeFieldExtractorsExtractors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]

---

##### `PutPreprocessConfig` <a name="PutPreprocessConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig"></a>

```csharp
private void PutPreprocessConfig(ChronicleParserLowCodeFieldExtractorsPreprocessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---

##### `ResetAppendRepeatedFields` <a name="ResetAppendRepeatedFields" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```csharp
private void ResetAppendRepeatedFields()
```

##### `ResetExtractors` <a name="ResetExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors"></a>

```csharp
private void ResetExtractors()
```

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat"></a>

```csharp
private void ResetLogFormat()
```

##### `ResetPreprocessConfig` <a name="ResetPreprocessConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```csharp
private void ResetPreprocessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors">Extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList">ChronicleParserLowCodeFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig">PreprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet">TransformedCbnSnippet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">AppendRepeatedFieldsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput">ExtractorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput">PreprocessConfigInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields">AppendRepeatedFields</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat">LogFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Extractors`<sup>Required</sup> <a name="Extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors"></a>

```csharp
public ChronicleParserLowCodeFieldExtractorsExtractorsList Extractors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList">ChronicleParserLowCodeFieldExtractorsExtractorsList</a>

---

##### `PreprocessConfig`<sup>Required</sup> <a name="PreprocessConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig"></a>

```csharp
public ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference PreprocessConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `TransformedCbnSnippet`<sup>Required</sup> <a name="TransformedCbnSnippet" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```csharp
public string TransformedCbnSnippet { get; }
```

- *Type:* string

---

##### `AppendRepeatedFieldsInput`<sup>Optional</sup> <a name="AppendRepeatedFieldsInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```csharp
public bool|IResolvable AppendRepeatedFieldsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExtractorsInput`<sup>Optional</sup> <a name="ExtractorsInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput"></a>

```csharp
public IResolvable|ChronicleParserLowCodeFieldExtractorsExtractors[] ExtractorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>[]

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput"></a>

```csharp
public string LogFormatInput { get; }
```

- *Type:* string

---

##### `PreprocessConfigInput`<sup>Optional</sup> <a name="PreprocessConfigInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```csharp
public ChronicleParserLowCodeFieldExtractorsPreprocessConfig PreprocessConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---

##### `AppendRepeatedFields`<sup>Required</sup> <a name="AppendRepeatedFields" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```csharp
public bool|IResolvable AppendRepeatedFields { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat"></a>

```csharp
public string LogFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue"></a>

```csharp
public ChronicleParserLowCodeFieldExtractors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

---


### ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference <a name="ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">ResetGrokRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrokRegex` <a name="ResetGrokRegex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```csharp
private void ResetGrokRegex()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">GrokRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">GrokRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrokRegexInput`<sup>Optional</sup> <a name="GrokRegexInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```csharp
public string GrokRegexInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `GrokRegex`<sup>Required</sup> <a name="GrokRegex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```csharp
public string GrokRegex { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```csharp
public ChronicleParserLowCodeFieldExtractorsPreprocessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---


### ChronicleParserLowCodeOutputReference <a name="ChronicleParserLowCodeOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserLowCodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors">PutFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetFieldExtractors">ResetFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetLog">ResetLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldExtractors` <a name="PutFieldExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors"></a>

```csharp
private void PutFieldExtractors(ChronicleParserLowCodeFieldExtractors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

---

##### `ResetFieldExtractors` <a name="ResetFieldExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetFieldExtractors"></a>

```csharp
private void ResetFieldExtractors()
```

##### `ResetLog` <a name="ResetLog" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetLog"></a>

```csharp
private void ResetLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractors">FieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference">ChronicleParserLowCodeFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractorsInput">FieldExtractorsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.logInput">LogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.log">Log</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldExtractors`<sup>Required</sup> <a name="FieldExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractors"></a>

```csharp
public ChronicleParserLowCodeFieldExtractorsOutputReference FieldExtractors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference">ChronicleParserLowCodeFieldExtractorsOutputReference</a>

---

##### `FieldExtractorsInput`<sup>Optional</sup> <a name="FieldExtractorsInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractorsInput"></a>

```csharp
public ChronicleParserLowCodeFieldExtractors FieldExtractorsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

---

##### `LogInput`<sup>Optional</sup> <a name="LogInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.logInput"></a>

```csharp
public string LogInput { get; }
```

- *Type:* string

---

##### `Log`<sup>Required</sup> <a name="Log" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.log"></a>

```csharp
public string Log { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.internalValue"></a>

```csharp
public ChronicleParserLowCode InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

---


### ChronicleParserTimeoutsOutputReference <a name="ChronicleParserTimeoutsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleParserTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

---


### ChronicleParserVersionInfoOutputReference <a name="ChronicleParserVersionInfoOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserVersionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParser">LatestParser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParserVersion">LatestParserVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.rollbackAvailable">RollbackAvailable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput">AutoUpgradeDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled">AutoUpgradeDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LatestParser`<sup>Required</sup> <a name="LatestParser" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParser"></a>

```csharp
public string LatestParser { get; }
```

- *Type:* string

---

##### `LatestParserVersion`<sup>Required</sup> <a name="LatestParserVersion" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParserVersion"></a>

```csharp
public string LatestParserVersion { get; }
```

- *Type:* string

---

##### `RollbackAvailable`<sup>Required</sup> <a name="RollbackAvailable" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.rollbackAvailable"></a>

```csharp
public IResolvable RollbackAvailable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `AutoUpgradeDisabledInput`<sup>Optional</sup> <a name="AutoUpgradeDisabledInput" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput"></a>

```csharp
public bool|IResolvable AutoUpgradeDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoUpgradeDisabled`<sup>Required</sup> <a name="AutoUpgradeDisabled" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled"></a>

```csharp
public bool|IResolvable AutoUpgradeDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.internalValue"></a>

```csharp
public ChronicleParserVersionInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

---



