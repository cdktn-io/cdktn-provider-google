# `dataGoogleStorageManagedFolderIamPolicy` Submodule <a name="`dataGoogleStorageManagedFolderIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageManagedFolderIamPolicy <a name="DataGoogleStorageManagedFolderIamPolicy" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_managed_folder_iam_policy google_storage_managed_folder_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.Initializer"></a>

```typescript
import { dataGoogleStorageManagedFolderIamPolicy } from '@cdktn/provider-google'

new dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy(scope: Construct, id: string, config: DataGoogleStorageManagedFolderIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig">DataGoogleStorageManagedFolderIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig">DataGoogleStorageManagedFolderIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageManagedFolderIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleStorageManagedFolderIamPolicy } from '@cdktn/provider-google'

dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleStorageManagedFolderIamPolicy } from '@cdktn/provider-google'

dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleStorageManagedFolderIamPolicy } from '@cdktn/provider-google'

dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleStorageManagedFolderIamPolicy } from '@cdktn/provider-google'

dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleStorageManagedFolderIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageManagedFolderIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageManagedFolderIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_managed_folder_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageManagedFolderIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.managedFolderInput">managedFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.managedFolder">managedFolder</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedFolderInput`<sup>Optional</sup> <a name="managedFolderInput" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.managedFolderInput"></a>

```typescript
public readonly managedFolderInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedFolder`<sup>Required</sup> <a name="managedFolder" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.managedFolder"></a>

```typescript
public readonly managedFolder: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageManagedFolderIamPolicyConfig <a name="DataGoogleStorageManagedFolderIamPolicyConfig" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleStorageManagedFolderIamPolicy } from '@cdktn/provider-google'

const dataGoogleStorageManagedFolderIamPolicyConfig: dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_managed_folder_iam_policy#bucket DataGoogleStorageManagedFolderIamPolicy#bucket}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.managedFolder">managedFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_managed_folder_iam_policy#managed_folder DataGoogleStorageManagedFolderIamPolicy#managed_folder}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_managed_folder_iam_policy#id DataGoogleStorageManagedFolderIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_managed_folder_iam_policy#bucket DataGoogleStorageManagedFolderIamPolicy#bucket}.

---

##### `managedFolder`<sup>Required</sup> <a name="managedFolder" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.managedFolder"></a>

```typescript
public readonly managedFolder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_managed_folder_iam_policy#managed_folder DataGoogleStorageManagedFolderIamPolicy#managed_folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageManagedFolderIamPolicy.DataGoogleStorageManagedFolderIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_managed_folder_iam_policy#id DataGoogleStorageManagedFolderIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



