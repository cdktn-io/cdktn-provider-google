# `chronicleParserExtension` Submodule <a name="`chronicleParserExtension` Submodule" id="@cdktn/provider-google.chronicleParserExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleParserExtension <a name="ChronicleParserExtension" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension google_chronicle_parser_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtension(Construct Scope, string Id, ChronicleParserExtensionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig">ChronicleParserExtensionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig">ChronicleParserExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing">PutDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors">PutFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetCbnSnippet">ResetCbnSnippet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDynamicParsing">ResetDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetFieldExtractors">ResetFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetLog">ResetLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetValidationSkipped">ResetValidationSkipped</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDynamicParsing` <a name="PutDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing"></a>

```csharp
private void PutDynamicParsing(ChronicleParserExtensionDynamicParsing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---

##### `PutFieldExtractors` <a name="PutFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors"></a>

```csharp
private void PutFieldExtractors(ChronicleParserExtensionFieldExtractors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts"></a>

```csharp
private void PutTimeouts(ChronicleParserExtensionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---

##### `ResetCbnSnippet` <a name="ResetCbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetCbnSnippet"></a>

```csharp
private void ResetCbnSnippet()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDynamicParsing` <a name="ResetDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDynamicParsing"></a>

```csharp
private void ResetDynamicParsing()
```

##### `ResetFieldExtractors` <a name="ResetFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetFieldExtractors"></a>

```csharp
private void ResetFieldExtractors()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLog` <a name="ResetLog" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetLog"></a>

```csharp
private void ResetLog()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidationSkipped` <a name="ResetValidationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetValidationSkipped"></a>

```csharp
private void ResetValidationSkipped()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleParserExtension resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleParserExtension.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleParserExtension.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleParserExtension.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ChronicleParserExtension.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChronicleParserExtension resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleParserExtension to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleParserExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleParserExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsing">DynamicParsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference">ChronicleParserExtensionDynamicParsingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.extensionValidationReport">ExtensionValidationReport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractors">FieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference">ChronicleParserExtensionFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lastLiveTime">LastLiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.parserextension">Parserextension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.stateLastChangedTime">StateLastChangedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference">ChronicleParserExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationReport">ValidationReport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippetInput">CbnSnippetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsingInput">DynamicParsingInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractorsInput">FieldExtractorsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logInput">LogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkippedInput">ValidationSkippedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippet">CbnSnippet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.log">Log</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkipped">ValidationSkipped</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DynamicParsing`<sup>Required</sup> <a name="DynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsing"></a>

```csharp
public ChronicleParserExtensionDynamicParsingOutputReference DynamicParsing { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference">ChronicleParserExtensionDynamicParsingOutputReference</a>

---

##### `ExtensionValidationReport`<sup>Required</sup> <a name="ExtensionValidationReport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.extensionValidationReport"></a>

```csharp
public string ExtensionValidationReport { get; }
```

- *Type:* string

---

##### `FieldExtractors`<sup>Required</sup> <a name="FieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractors"></a>

```csharp
public ChronicleParserExtensionFieldExtractorsOutputReference FieldExtractors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference">ChronicleParserExtensionFieldExtractorsOutputReference</a>

---

##### `LastLiveTime`<sup>Required</sup> <a name="LastLiveTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lastLiveTime"></a>

```csharp
public string LastLiveTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parserextension`<sup>Required</sup> <a name="Parserextension" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.parserextension"></a>

```csharp
public string Parserextension { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateLastChangedTime`<sup>Required</sup> <a name="StateLastChangedTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.stateLastChangedTime"></a>

```csharp
public string StateLastChangedTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeouts"></a>

```csharp
public ChronicleParserExtensionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference">ChronicleParserExtensionTimeoutsOutputReference</a>

---

##### `ValidationReport`<sup>Required</sup> <a name="ValidationReport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationReport"></a>

```csharp
public string ValidationReport { get; }
```

- *Type:* string

---

##### `CbnSnippetInput`<sup>Optional</sup> <a name="CbnSnippetInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippetInput"></a>

```csharp
public string CbnSnippetInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DynamicParsingInput`<sup>Optional</sup> <a name="DynamicParsingInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsingInput"></a>

```csharp
public ChronicleParserExtensionDynamicParsing DynamicParsingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---

##### `FieldExtractorsInput`<sup>Optional</sup> <a name="FieldExtractorsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractorsInput"></a>

```csharp
public ChronicleParserExtensionFieldExtractors FieldExtractorsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LogInput`<sup>Optional</sup> <a name="LogInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logInput"></a>

```csharp
public string LogInput { get; }
```

- *Type:* string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeoutsInput"></a>

```csharp
public IResolvable|ChronicleParserExtensionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---

##### `ValidationSkippedInput`<sup>Optional</sup> <a name="ValidationSkippedInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkippedInput"></a>

```csharp
public bool|IResolvable ValidationSkippedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CbnSnippet`<sup>Required</sup> <a name="CbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippet"></a>

```csharp
public string CbnSnippet { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Log`<sup>Required</sup> <a name="Log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.log"></a>

```csharp
public string Log { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ValidationSkipped`<sup>Required</sup> <a name="ValidationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkipped"></a>

```csharp
public bool|IResolvable ValidationSkipped { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleParserExtensionConfig <a name="ChronicleParserExtensionConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Instance,
    string Location,
    string LogType,
    string CbnSnippet = null,
    string DeletionPolicy = null,
    ChronicleParserExtensionDynamicParsing DynamicParsing = null,
    ChronicleParserExtensionFieldExtractors FieldExtractors = null,
    string Id = null,
    string Log = null,
    string Project = null,
    ChronicleParserExtensionTimeouts Timeouts = null,
    bool|IResolvable ValidationSkipped = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.instance">Instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.logType">LogType</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.cbnSnippet">CbnSnippet</a></code> | <code>string</code> | Parser config could be a cbn snippet. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dynamicParsing">DynamicParsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | dynamic_parsing block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.fieldExtractors">FieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.log">Log</a></code> | <code>string</code> | Raw log used to assist the user in creation of augmentation. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.validationSkipped">ValidationSkipped</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Flag to bypass parser extension validation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#instance ChronicleParserExtension#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#location ChronicleParserExtension#location}

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#log_type ChronicleParserExtension#log_type}

---

##### `CbnSnippet`<sup>Optional</sup> <a name="CbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.cbnSnippet"></a>

```csharp
public string CbnSnippet { get; set; }
```

- *Type:* string

Parser config could be a cbn snippet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#cbn_snippet ChronicleParserExtension#cbn_snippet}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#deletion_policy ChronicleParserExtension#deletion_policy}

---

##### `DynamicParsing`<sup>Optional</sup> <a name="DynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dynamicParsing"></a>

```csharp
public ChronicleParserExtensionDynamicParsing DynamicParsing { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

dynamic_parsing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#dynamic_parsing ChronicleParserExtension#dynamic_parsing}

---

##### `FieldExtractors`<sup>Optional</sup> <a name="FieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.fieldExtractors"></a>

```csharp
public ChronicleParserExtensionFieldExtractors FieldExtractors { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#field_extractors ChronicleParserExtension#field_extractors}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Log`<sup>Optional</sup> <a name="Log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.log"></a>

```csharp
public string Log { get; set; }
```

- *Type:* string

Raw log used to assist the user in creation of augmentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#log ChronicleParserExtension#log}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.timeouts"></a>

```csharp
public ChronicleParserExtensionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#timeouts ChronicleParserExtension#timeouts}

---

##### `ValidationSkipped`<sup>Optional</sup> <a name="ValidationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.validationSkipped"></a>

```csharp
public bool|IResolvable ValidationSkipped { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Flag to bypass parser extension validation.

If enabled, the parser extension won't be rejected during the validation
phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#validation_skipped ChronicleParserExtension#validation_skipped}

---

### ChronicleParserExtensionDynamicParsing <a name="ChronicleParserExtensionDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionDynamicParsing {
    IResolvable|ChronicleParserExtensionDynamicParsingOptedFields[] OptedFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.property.optedFields">OptedFields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]</code> | opted_fields block. |

---

##### `OptedFields`<sup>Optional</sup> <a name="OptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.property.optedFields"></a>

```csharp
public IResolvable|ChronicleParserExtensionDynamicParsingOptedFields[] OptedFields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]

opted_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#opted_fields ChronicleParserExtension#opted_fields}

---

### ChronicleParserExtensionDynamicParsingOptedFields <a name="ChronicleParserExtensionDynamicParsingOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionDynamicParsingOptedFields {
    string Path = null,
    string SampleValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.path">Path</a></code> | <code>string</code> | Path of the log field. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue">SampleValue</a></code> | <code>string</code> | Sample value of the log field. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#path ChronicleParserExtension#path}

---

##### `SampleValue`<sup>Optional</sup> <a name="SampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue"></a>

```csharp
public string SampleValue { get; set; }
```

- *Type:* string

Sample value of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#sample_value ChronicleParserExtension#sample_value}

---

### ChronicleParserExtensionFieldExtractors <a name="ChronicleParserExtensionFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionFieldExtractors {
    bool|IResolvable AppendRepeatedFields = null,
    IResolvable|ChronicleParserExtensionFieldExtractorsExtractors[] Extractors = null,
    string LogFormat = null,
    ChronicleParserExtensionFieldExtractorsPreprocessConfig PreprocessConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.appendRepeatedFields">AppendRepeatedFields</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.extractors">Extractors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]</code> | extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.logFormat">LogFormat</a></code> | <code>string</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.preprocessConfig">PreprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `AppendRepeatedFields`<sup>Optional</sup> <a name="AppendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.appendRepeatedFields"></a>

```csharp
public bool|IResolvable AppendRepeatedFields { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#append_repeated_fields ChronicleParserExtension#append_repeated_fields}

---

##### `Extractors`<sup>Optional</sup> <a name="Extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.extractors"></a>

```csharp
public IResolvable|ChronicleParserExtensionFieldExtractorsExtractors[] Extractors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#extractors ChronicleParserExtension#extractors}

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.logFormat"></a>

```csharp
public string LogFormat { get; set; }
```

- *Type:* string

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#log_format ChronicleParserExtension#log_format}

---

##### `PreprocessConfig`<sup>Optional</sup> <a name="PreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.preprocessConfig"></a>

```csharp
public ChronicleParserExtensionFieldExtractorsPreprocessConfig PreprocessConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#preprocess_config ChronicleParserExtension#preprocess_config}

---

### ChronicleParserExtensionFieldExtractorsExtractors <a name="ChronicleParserExtensionFieldExtractorsExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionFieldExtractorsExtractors {
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
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath">DestinationPath</a></code> | <code>string</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath">FieldPath</a></code> | <code>string</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp">PreconditionOp</a></code> | <code>string</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath">PreconditionPath</a></code> | <code>string</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue">PreconditionValue</a></code> | <code>string</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.value">Value</a></code> | <code>string</code> | Value to be mapped to the destination path directly. |

---

##### `DestinationPath`<sup>Optional</sup> <a name="DestinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath"></a>

```csharp
public string DestinationPath { get; set; }
```

- *Type:* string

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#destination_path ChronicleParserExtension#destination_path}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath"></a>

```csharp
public string FieldPath { get; set; }
```

- *Type:* string

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#field_path ChronicleParserExtension#field_path}

---

##### `PreconditionOp`<sup>Optional</sup> <a name="PreconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp"></a>

```csharp
public string PreconditionOp { get; set; }
```

- *Type:* string

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#precondition_op ChronicleParserExtension#precondition_op}

---

##### `PreconditionPath`<sup>Optional</sup> <a name="PreconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath"></a>

```csharp
public string PreconditionPath { get; set; }
```

- *Type:* string

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#precondition_path ChronicleParserExtension#precondition_path}

---

##### `PreconditionValue`<sup>Optional</sup> <a name="PreconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue"></a>

```csharp
public string PreconditionValue { get; set; }
```

- *Type:* string

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#precondition_value ChronicleParserExtension#precondition_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#value ChronicleParserExtension#value}

---

### ChronicleParserExtensionFieldExtractorsPreprocessConfig <a name="ChronicleParserExtensionFieldExtractorsPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionFieldExtractorsPreprocessConfig {
    string GrokRegex = null,
    string Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex">GrokRegex</a></code> | <code>string</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target">Target</a></code> | <code>string</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `GrokRegex`<sup>Optional</sup> <a name="GrokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```csharp
public string GrokRegex { get; set; }
```

- *Type:* string

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#grok_regex ChronicleParserExtension#grok_regex}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#target ChronicleParserExtension#target}

---

### ChronicleParserExtensionTimeouts <a name="ChronicleParserExtensionTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleParserExtensionDynamicParsingOptedFieldsList <a name="ChronicleParserExtensionDynamicParsingOptedFieldsList" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionDynamicParsingOptedFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get"></a>

```csharp
private ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue"></a>

```csharp
public IResolvable|ChronicleParserExtensionDynamicParsingOptedFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]

---


### ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference <a name="ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue">ResetSampleValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetSampleValue` <a name="ResetSampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue"></a>

```csharp
private void ResetSampleValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput">SampleValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue">SampleValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SampleValueInput`<sup>Optional</sup> <a name="SampleValueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput"></a>

```csharp
public string SampleValueInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SampleValue`<sup>Required</sup> <a name="SampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue"></a>

```csharp
public string SampleValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleParserExtensionDynamicParsingOptedFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>

---


### ChronicleParserExtensionDynamicParsingOutputReference <a name="ChronicleParserExtensionDynamicParsingOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionDynamicParsingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields">PutOptedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields">ResetOptedFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOptedFields` <a name="PutOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields"></a>

```csharp
private void PutOptedFields(IResolvable|ChronicleParserExtensionDynamicParsingOptedFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]

---

##### `ResetOptedFields` <a name="ResetOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields"></a>

```csharp
private void ResetOptedFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFields">OptedFields</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList">ChronicleParserExtensionDynamicParsingOptedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput">OptedFieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptedFields`<sup>Required</sup> <a name="OptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFields"></a>

```csharp
public ChronicleParserExtensionDynamicParsingOptedFieldsList OptedFields { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList">ChronicleParserExtensionDynamicParsingOptedFieldsList</a>

---

##### `OptedFieldsInput`<sup>Optional</sup> <a name="OptedFieldsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput"></a>

```csharp
public IResolvable|ChronicleParserExtensionDynamicParsingOptedFields[] OptedFieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.internalValue"></a>

```csharp
public ChronicleParserExtensionDynamicParsing InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---


### ChronicleParserExtensionFieldExtractorsExtractorsList <a name="ChronicleParserExtensionFieldExtractorsExtractorsList" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionFieldExtractorsExtractorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get"></a>

```csharp
private ChronicleParserExtensionFieldExtractorsExtractorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue"></a>

```csharp
public IResolvable|ChronicleParserExtensionFieldExtractorsExtractors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]

---


### ChronicleParserExtensionFieldExtractorsExtractorsOutputReference <a name="ChronicleParserExtensionFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionFieldExtractorsExtractorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath">ResetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp">ResetPreconditionOp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath">ResetPreconditionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue">ResetPreconditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPath` <a name="ResetDestinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```csharp
private void ResetDestinationPath()
```

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```csharp
private void ResetFieldPath()
```

##### `ResetPreconditionOp` <a name="ResetPreconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```csharp
private void ResetPreconditionOp()
```

##### `ResetPreconditionPath` <a name="ResetPreconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```csharp
private void ResetPreconditionPath()
```

##### `ResetPreconditionValue` <a name="ResetPreconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```csharp
private void ResetPreconditionValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">PreconditionOpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">PreconditionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">PreconditionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath">DestinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath">FieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp">PreconditionOp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath">PreconditionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue">PreconditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```csharp
public string DestinationPathInput { get; }
```

- *Type:* string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```csharp
public string FieldPathInput { get; }
```

- *Type:* string

---

##### `PreconditionOpInput`<sup>Optional</sup> <a name="PreconditionOpInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```csharp
public string PreconditionOpInput { get; }
```

- *Type:* string

---

##### `PreconditionPathInput`<sup>Optional</sup> <a name="PreconditionPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```csharp
public string PreconditionPathInput { get; }
```

- *Type:* string

---

##### `PreconditionValueInput`<sup>Optional</sup> <a name="PreconditionValueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```csharp
public string PreconditionValueInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```csharp
public string DestinationPath { get; }
```

- *Type:* string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```csharp
public string FieldPath { get; }
```

- *Type:* string

---

##### `PreconditionOp`<sup>Required</sup> <a name="PreconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```csharp
public string PreconditionOp { get; }
```

- *Type:* string

---

##### `PreconditionPath`<sup>Required</sup> <a name="PreconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```csharp
public string PreconditionPath { get; }
```

- *Type:* string

---

##### `PreconditionValue`<sup>Required</sup> <a name="PreconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```csharp
public string PreconditionValue { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleParserExtensionFieldExtractorsExtractors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>

---


### ChronicleParserExtensionFieldExtractorsOutputReference <a name="ChronicleParserExtensionFieldExtractorsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionFieldExtractorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors">PutExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig">PutPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields">ResetAppendRepeatedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors">ResetExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig">ResetPreprocessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtractors` <a name="PutExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors"></a>

```csharp
private void PutExtractors(IResolvable|ChronicleParserExtensionFieldExtractorsExtractors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]

---

##### `PutPreprocessConfig` <a name="PutPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig"></a>

```csharp
private void PutPreprocessConfig(ChronicleParserExtensionFieldExtractorsPreprocessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---

##### `ResetAppendRepeatedFields` <a name="ResetAppendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```csharp
private void ResetAppendRepeatedFields()
```

##### `ResetExtractors` <a name="ResetExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors"></a>

```csharp
private void ResetExtractors()
```

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat"></a>

```csharp
private void ResetLogFormat()
```

##### `ResetPreprocessConfig` <a name="ResetPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```csharp
private void ResetPreprocessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractors">Extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList">ChronicleParserExtensionFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig">PreprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet">TransformedCbnSnippet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">AppendRepeatedFieldsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput">ExtractorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput">PreprocessConfigInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields">AppendRepeatedFields</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat">LogFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Extractors`<sup>Required</sup> <a name="Extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractors"></a>

```csharp
public ChronicleParserExtensionFieldExtractorsExtractorsList Extractors { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList">ChronicleParserExtensionFieldExtractorsExtractorsList</a>

---

##### `PreprocessConfig`<sup>Required</sup> <a name="PreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig"></a>

```csharp
public ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference PreprocessConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `TransformedCbnSnippet`<sup>Required</sup> <a name="TransformedCbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```csharp
public string TransformedCbnSnippet { get; }
```

- *Type:* string

---

##### `AppendRepeatedFieldsInput`<sup>Optional</sup> <a name="AppendRepeatedFieldsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```csharp
public bool|IResolvable AppendRepeatedFieldsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExtractorsInput`<sup>Optional</sup> <a name="ExtractorsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput"></a>

```csharp
public IResolvable|ChronicleParserExtensionFieldExtractorsExtractors[] ExtractorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>[]

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput"></a>

```csharp
public string LogFormatInput { get; }
```

- *Type:* string

---

##### `PreprocessConfigInput`<sup>Optional</sup> <a name="PreprocessConfigInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```csharp
public ChronicleParserExtensionFieldExtractorsPreprocessConfig PreprocessConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---

##### `AppendRepeatedFields`<sup>Required</sup> <a name="AppendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```csharp
public bool|IResolvable AppendRepeatedFields { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat"></a>

```csharp
public string LogFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue"></a>

```csharp
public ChronicleParserExtensionFieldExtractors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---


### ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference <a name="ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">ResetGrokRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrokRegex` <a name="ResetGrokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```csharp
private void ResetGrokRegex()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">GrokRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">GrokRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrokRegexInput`<sup>Optional</sup> <a name="GrokRegexInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```csharp
public string GrokRegexInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `GrokRegex`<sup>Required</sup> <a name="GrokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```csharp
public string GrokRegex { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```csharp
public ChronicleParserExtensionFieldExtractorsPreprocessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---


### ChronicleParserExtensionTimeoutsOutputReference <a name="ChronicleParserExtensionTimeoutsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ChronicleParserExtensionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChronicleParserExtensionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---



