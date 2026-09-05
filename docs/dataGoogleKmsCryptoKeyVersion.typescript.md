# `dataGoogleKmsCryptoKeyVersion` Submodule <a name="`dataGoogleKmsCryptoKeyVersion` Submodule" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKeyVersion <a name="DataGoogleKmsCryptoKeyVersion" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/kms_crypto_key_version google_kms_crypto_key_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKeyVersion } from '@cdktn/provider-google'

new dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion(scope: Construct, id: string, config: DataGoogleKmsCryptoKeyVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig">DataGoogleKmsCryptoKeyVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig">DataGoogleKmsCryptoKeyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleKmsCryptoKeyVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isConstruct"></a>

```typescript
import { dataGoogleKmsCryptoKeyVersion } from '@cdktn/provider-google'

dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformElement"></a>

```typescript
import { dataGoogleKmsCryptoKeyVersion } from '@cdktn/provider-google'

dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformDataSource"></a>

```typescript
import { dataGoogleKmsCryptoKeyVersion } from '@cdktn/provider-google'

dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport"></a>

```typescript
import { dataGoogleKmsCryptoKeyVersion } from '@cdktn/provider-google'

dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleKmsCryptoKeyVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleKmsCryptoKeyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleKmsCryptoKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/kms_crypto_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsCryptoKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.protectionLevel">protectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.publicKey">publicKey</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList">DataGoogleKmsCryptoKeyVersionPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.protectionLevel"></a>

```typescript
public readonly protectionLevel: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.publicKey"></a>

```typescript
public readonly publicKey: DataGoogleKmsCryptoKeyVersionPublicKeyList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList">DataGoogleKmsCryptoKeyVersionPublicKeyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKeyInput"></a>

```typescript
public readonly cryptoKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeyVersionConfig <a name="DataGoogleKmsCryptoKeyVersionConfig" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKeyVersion } from '@cdktn/provider-google'

const dataGoogleKmsCryptoKeyVersionConfig: dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/kms_crypto_key_version#crypto_key DataGoogleKmsCryptoKeyVersion#crypto_key}. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/kms_crypto_key_version#id DataGoogleKmsCryptoKeyVersion#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.version">version</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/kms_crypto_key_version#version DataGoogleKmsCryptoKeyVersion#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/kms_crypto_key_version#crypto_key DataGoogleKmsCryptoKeyVersion#crypto_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/kms_crypto_key_version#id DataGoogleKmsCryptoKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/kms_crypto_key_version#version DataGoogleKmsCryptoKeyVersion#version}.

---

### DataGoogleKmsCryptoKeyVersionPublicKey <a name="DataGoogleKmsCryptoKeyVersionPublicKey" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKeyVersion } from '@cdktn/provider-google'

const dataGoogleKmsCryptoKeyVersionPublicKey: dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeyVersionPublicKeyList <a name="DataGoogleKmsCryptoKeyVersionPublicKeyList" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKeyVersion } from '@cdktn/provider-google'

new dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.get"></a>

```typescript
public get(index: number): DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference <a name="DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer"></a>

```typescript
import { dataGoogleKmsCryptoKeyVersion } from '@cdktn/provider-google'

new dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.pem">pem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey">DataGoogleKmsCryptoKeyVersionPublicKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.pem"></a>

```typescript
public readonly pem: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleKmsCryptoKeyVersionPublicKey;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey">DataGoogleKmsCryptoKeyVersionPublicKey</a>

---



