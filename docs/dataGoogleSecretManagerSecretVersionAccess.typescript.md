# `dataGoogleSecretManagerSecretVersionAccess` Submodule <a name="`dataGoogleSecretManagerSecretVersionAccess` Submodule" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerSecretVersionAccess <a name="DataGoogleSecretManagerSecretVersionAccess" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access google_secret_manager_secret_version_access}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecretVersionAccess } from '@cdktn/provider-google'

new dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess(scope: Construct, id: string, config: DataGoogleSecretManagerSecretVersionAccessConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig">DataGoogleSecretManagerSecretVersionAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig">DataGoogleSecretManagerSecretVersionAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetIsSecretDataBase64">resetIsSecretDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsSecretDataBase64` <a name="resetIsSecretDataBase64" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetIsSecretDataBase64"></a>

```typescript
public resetIsSecretDataBase64(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleSecretManagerSecretVersionAccess resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct"></a>

```typescript
import { dataGoogleSecretManagerSecretVersionAccess } from '@cdktn/provider-google'

dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement"></a>

```typescript
import { dataGoogleSecretManagerSecretVersionAccess } from '@cdktn/provider-google'

dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource"></a>

```typescript
import { dataGoogleSecretManagerSecretVersionAccess } from '@cdktn/provider-google'

dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport"></a>

```typescript
import { dataGoogleSecretManagerSecretVersionAccess } from '@cdktn/provider-google'

dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleSecretManagerSecretVersionAccess resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleSecretManagerSecretVersionAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleSecretManagerSecretVersionAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerSecretVersionAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretData">secretData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.isSecretDataBase64Input">isSecretDataBase64Input</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.isSecretDataBase64">isSecretDataBase64</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretData`<sup>Required</sup> <a name="secretData" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretData"></a>

```typescript
public readonly secretData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isSecretDataBase64Input`<sup>Optional</sup> <a name="isSecretDataBase64Input" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.isSecretDataBase64Input"></a>

```typescript
public readonly isSecretDataBase64Input: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isSecretDataBase64`<sup>Required</sup> <a name="isSecretDataBase64" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.isSecretDataBase64"></a>

```typescript
public readonly isSecretDataBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerSecretVersionAccessConfig <a name="DataGoogleSecretManagerSecretVersionAccessConfig" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.Initializer"></a>

```typescript
import { dataGoogleSecretManagerSecretVersionAccess } from '@cdktn/provider-google'

const dataGoogleSecretManagerSecretVersionAccessConfig: dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.secret">secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access#secret DataGoogleSecretManagerSecretVersionAccess#secret}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access#id DataGoogleSecretManagerSecretVersionAccess#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.isSecretDataBase64">isSecretDataBase64</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access#is_secret_data_base64 DataGoogleSecretManagerSecretVersionAccess#is_secret_data_base64}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access#project DataGoogleSecretManagerSecretVersionAccess#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access#version DataGoogleSecretManagerSecretVersionAccess#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access#secret DataGoogleSecretManagerSecretVersionAccess#secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access#id DataGoogleSecretManagerSecretVersionAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSecretDataBase64`<sup>Optional</sup> <a name="isSecretDataBase64" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.isSecretDataBase64"></a>

```typescript
public readonly isSecretDataBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access#is_secret_data_base64 DataGoogleSecretManagerSecretVersionAccess#is_secret_data_base64}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access#project DataGoogleSecretManagerSecretVersionAccess#project}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_secret_version_access#version DataGoogleSecretManagerSecretVersionAccess#version}.

---



