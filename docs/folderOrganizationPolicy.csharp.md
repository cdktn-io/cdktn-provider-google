# `folderOrganizationPolicy` Submodule <a name="`folderOrganizationPolicy` Submodule" id="@cdktn/provider-google.folderOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FolderOrganizationPolicy <a name="FolderOrganizationPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy google_folder_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicy(Construct Scope, string Id, FolderOrganizationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig">FolderOrganizationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig">FolderOrganizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putBooleanPolicy">PutBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy">PutListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putRestorePolicy">PutRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetBooleanPolicy">ResetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetListPolicy">ResetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetRestorePolicy">ResetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBooleanPolicy` <a name="PutBooleanPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putBooleanPolicy"></a>

```csharp
private void PutBooleanPolicy(FolderOrganizationPolicyBooleanPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

---

##### `PutListPolicy` <a name="PutListPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy"></a>

```csharp
private void PutListPolicy(FolderOrganizationPolicyListPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

---

##### `PutRestorePolicy` <a name="PutRestorePolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putRestorePolicy"></a>

```csharp
private void PutRestorePolicy(FolderOrganizationPolicyRestorePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(FolderOrganizationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>

---

##### `ResetBooleanPolicy` <a name="ResetBooleanPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetBooleanPolicy"></a>

```csharp
private void ResetBooleanPolicy()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetListPolicy` <a name="ResetListPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetListPolicy"></a>

```csharp
private void ResetListPolicy()
```

##### `ResetRestorePolicy` <a name="ResetRestorePolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetRestorePolicy"></a>

```csharp
private void ResetRestorePolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FolderOrganizationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

FolderOrganizationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

FolderOrganizationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

FolderOrganizationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

FolderOrganizationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FolderOrganizationPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FolderOrganizationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FolderOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FolderOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference">FolderOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference">FolderOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference">FolderOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference">FolderOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicyInput">BooleanPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraintInput">ConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicyInput">ListPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicyInput">RestorePolicyInput</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraint">Constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.version">Version</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BooleanPolicy`<sup>Required</sup> <a name="BooleanPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicy"></a>

```csharp
public FolderOrganizationPolicyBooleanPolicyOutputReference BooleanPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference">FolderOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ListPolicy`<sup>Required</sup> <a name="ListPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicy"></a>

```csharp
public FolderOrganizationPolicyListPolicyOutputReference ListPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference">FolderOrganizationPolicyListPolicyOutputReference</a>

---

##### `RestorePolicy`<sup>Required</sup> <a name="RestorePolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicy"></a>

```csharp
public FolderOrganizationPolicyRestorePolicyOutputReference RestorePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference">FolderOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeouts"></a>

```csharp
public FolderOrganizationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference">FolderOrganizationPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BooleanPolicyInput`<sup>Optional</sup> <a name="BooleanPolicyInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.booleanPolicyInput"></a>

```csharp
public FolderOrganizationPolicyBooleanPolicy BooleanPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraintInput"></a>

```csharp
public string ConstraintInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListPolicyInput`<sup>Optional</sup> <a name="ListPolicyInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.listPolicyInput"></a>

```csharp
public FolderOrganizationPolicyListPolicy ListPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

---

##### `RestorePolicyInput`<sup>Optional</sup> <a name="RestorePolicyInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.restorePolicyInput"></a>

```csharp
public FolderOrganizationPolicyRestorePolicy RestorePolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|FolderOrganizationPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.constraint"></a>

```csharp
public string Constraint { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FolderOrganizationPolicyBooleanPolicy <a name="FolderOrganizationPolicyBooleanPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyBooleanPolicy {
    bool|IResolvable Enforced
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy.property.enforced">Enforced</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy.property.enforced"></a>

```csharp
public bool|IResolvable Enforced { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#enforced FolderOrganizationPolicy#enforced}

---

### FolderOrganizationPolicyConfig <a name="FolderOrganizationPolicyConfig" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Constraint,
    string Folder,
    FolderOrganizationPolicyBooleanPolicy BooleanPolicy = null,
    string DeletionPolicy = null,
    string Id = null,
    FolderOrganizationPolicyListPolicy ListPolicy = null,
    FolderOrganizationPolicyRestorePolicy RestorePolicy = null,
    FolderOrganizationPolicyTimeouts Timeouts = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.constraint">Constraint</a></code> | <code>string</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.folder">Folder</a></code> | <code>string</code> | The resource name of the folder to set the policy for. Its format is folders/{folder_id}. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#id FolderOrganizationPolicy#id}. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.version">Version</a></code> | <code>double</code> | Version of the Policy. Default version is 0. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.constraint"></a>

```csharp
public string Constraint { get; set; }
```

- *Type:* string

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#constraint FolderOrganizationPolicy#constraint}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The resource name of the folder to set the policy for. Its format is folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#folder FolderOrganizationPolicy#folder}

---

##### `BooleanPolicy`<sup>Optional</sup> <a name="BooleanPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.booleanPolicy"></a>

```csharp
public FolderOrganizationPolicyBooleanPolicy BooleanPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#boolean_policy FolderOrganizationPolicy#boolean_policy}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#deletion_policy FolderOrganizationPolicy#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#id FolderOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ListPolicy`<sup>Optional</sup> <a name="ListPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.listPolicy"></a>

```csharp
public FolderOrganizationPolicyListPolicy ListPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#list_policy FolderOrganizationPolicy#list_policy}

---

##### `RestorePolicy`<sup>Optional</sup> <a name="RestorePolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.restorePolicy"></a>

```csharp
public FolderOrganizationPolicyRestorePolicy RestorePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#restore_policy FolderOrganizationPolicy#restore_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.timeouts"></a>

```csharp
public FolderOrganizationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#timeouts FolderOrganizationPolicy#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyConfig.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#version FolderOrganizationPolicy#version}

---

### FolderOrganizationPolicyListPolicy <a name="FolderOrganizationPolicyListPolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyListPolicy {
    FolderOrganizationPolicyListPolicyAllow Allow = null,
    FolderOrganizationPolicyListPolicyDeny Deny = null,
    bool|IResolvable InheritFromParent = null,
    string SuggestedValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.allow">Allow</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.deny">Deny</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.inheritFromParent">InheritFromParent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.suggestedValue">SuggestedValue</a></code> | <code>string</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.allow"></a>

```csharp
public FolderOrganizationPolicyListPolicyAllow Allow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#allow FolderOrganizationPolicy#allow}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.deny"></a>

```csharp
public FolderOrganizationPolicyListPolicyDeny Deny { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#deny FolderOrganizationPolicy#deny}

---

##### `InheritFromParent`<sup>Optional</sup> <a name="InheritFromParent" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```csharp
public bool|IResolvable InheritFromParent { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#inherit_from_parent FolderOrganizationPolicy#inherit_from_parent}

---

##### `SuggestedValue`<sup>Optional</sup> <a name="SuggestedValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy.property.suggestedValue"></a>

```csharp
public string SuggestedValue { get; set; }
```

- *Type:* string

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#suggested_value FolderOrganizationPolicy#suggested_value}

---

### FolderOrganizationPolicyListPolicyAllow <a name="FolderOrganizationPolicyListPolicyAllow" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyListPolicyAllow {
    bool|IResolvable All = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.all">All</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.values">Values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.all"></a>

```csharp
public bool|IResolvable All { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#all FolderOrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#values FolderOrganizationPolicy#values}

---

### FolderOrganizationPolicyListPolicyDeny <a name="FolderOrganizationPolicyListPolicyDeny" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyListPolicyDeny {
    bool|IResolvable All = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.all">All</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The policy allows or denies all values. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.values">Values</a></code> | <code>string[]</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.all"></a>

```csharp
public bool|IResolvable All { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#all FolderOrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#values FolderOrganizationPolicy#values}

---

### FolderOrganizationPolicyRestorePolicy <a name="FolderOrganizationPolicyRestorePolicy" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyRestorePolicy {
    bool|IResolvable Default
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy.property.default">Default</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy.property.default"></a>

```csharp
public bool|IResolvable Default { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#default FolderOrganizationPolicy#default}

---

### FolderOrganizationPolicyTimeouts <a name="FolderOrganizationPolicyTimeouts" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#create FolderOrganizationPolicy#create}. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#delete FolderOrganizationPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#read FolderOrganizationPolicy#read}. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#update FolderOrganizationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#create FolderOrganizationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#delete FolderOrganizationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#read FolderOrganizationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/folder_organization_policy#update FolderOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FolderOrganizationPolicyBooleanPolicyOutputReference <a name="FolderOrganizationPolicyBooleanPolicyOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyBooleanPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">EnforcedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced">Enforced</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```csharp
public bool|IResolvable EnforcedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```csharp
public bool|IResolvable Enforced { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```csharp
public FolderOrganizationPolicyBooleanPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyBooleanPolicy">FolderOrganizationPolicyBooleanPolicy</a>

---


### FolderOrganizationPolicyListPolicyAllowOutputReference <a name="FolderOrganizationPolicyListPolicyAllowOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyListPolicyAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput">AllInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.all">All</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```csharp
public bool|IResolvable AllInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```csharp
public bool|IResolvable All { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```csharp
public FolderOrganizationPolicyListPolicyAllow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

---


### FolderOrganizationPolicyListPolicyDenyOutputReference <a name="FolderOrganizationPolicyListPolicyDenyOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyListPolicyDenyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput">AllInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.all">All</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```csharp
public bool|IResolvable AllInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```csharp
public bool|IResolvable All { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```csharp
public FolderOrganizationPolicyListPolicyDeny InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

---


### FolderOrganizationPolicyListPolicyOutputReference <a name="FolderOrganizationPolicyListPolicyOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyListPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">ResetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">ResetSuggestedValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllow` <a name="PutAllow" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```csharp
private void PutAllow(FolderOrganizationPolicyListPolicyAllow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

---

##### `PutDeny` <a name="PutDeny" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```csharp
private void PutDeny(FolderOrganizationPolicyListPolicyDeny Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```csharp
private void ResetDeny()
```

##### `ResetInheritFromParent` <a name="ResetInheritFromParent" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```csharp
private void ResetInheritFromParent()
```

##### `ResetSuggestedValue` <a name="ResetSuggestedValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```csharp
private void ResetSuggestedValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allow">Allow</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference">FolderOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.deny">Deny</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference">FolderOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.denyInput">DenyInput</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">InheritFromParentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">SuggestedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">InheritFromParent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue">SuggestedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```csharp
public FolderOrganizationPolicyListPolicyAllowOutputReference Allow { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllowOutputReference">FolderOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```csharp
public FolderOrganizationPolicyListPolicyDenyOutputReference Deny { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDenyOutputReference">FolderOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```csharp
public FolderOrganizationPolicyListPolicyAllow AllowInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyAllow">FolderOrganizationPolicyListPolicyAllow</a>

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```csharp
public FolderOrganizationPolicyListPolicyDeny DenyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyDeny">FolderOrganizationPolicyListPolicyDeny</a>

---

##### `InheritFromParentInput`<sup>Optional</sup> <a name="InheritFromParentInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```csharp
public bool|IResolvable InheritFromParentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SuggestedValueInput`<sup>Optional</sup> <a name="SuggestedValueInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```csharp
public string SuggestedValueInput { get; }
```

- *Type:* string

---

##### `InheritFromParent`<sup>Required</sup> <a name="InheritFromParent" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```csharp
public bool|IResolvable InheritFromParent { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SuggestedValue`<sup>Required</sup> <a name="SuggestedValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```csharp
public string SuggestedValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```csharp
public FolderOrganizationPolicyListPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyListPolicy">FolderOrganizationPolicyListPolicy</a>

---


### FolderOrganizationPolicyRestorePolicyOutputReference <a name="FolderOrganizationPolicyRestorePolicyOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyRestorePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">DefaultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.default">Default</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```csharp
public bool|IResolvable DefaultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```csharp
public bool|IResolvable Default { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```csharp
public FolderOrganizationPolicyRestorePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyRestorePolicy">FolderOrganizationPolicyRestorePolicy</a>

---


### FolderOrganizationPolicyTimeoutsOutputReference <a name="FolderOrganizationPolicyTimeoutsOutputReference" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new FolderOrganizationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FolderOrganizationPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.folderOrganizationPolicy.FolderOrganizationPolicyTimeouts">FolderOrganizationPolicyTimeouts</a>

---



