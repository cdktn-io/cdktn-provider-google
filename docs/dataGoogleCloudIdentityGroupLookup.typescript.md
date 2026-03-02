# `dataGoogleCloudIdentityGroupLookup` Submodule <a name="`dataGoogleCloudIdentityGroupLookup` Submodule" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroupLookup <a name="DataGoogleCloudIdentityGroupLookup" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/cloud_identity_group_lookup google_cloud_identity_group_lookup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupLookup } from '@cdktn/provider-google'

new dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup(scope: Construct, id: string, config: DataGoogleCloudIdentityGroupLookupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig">DataGoogleCloudIdentityGroupLookupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig">DataGoogleCloudIdentityGroupLookupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey">putGroupKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putGroupKey` <a name="putGroupKey" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey"></a>

```typescript
public putGroupKey(value: DataGoogleCloudIdentityGroupLookupGroupKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudIdentityGroupLookup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct"></a>

```typescript
import { dataGoogleCloudIdentityGroupLookup } from '@cdktn/provider-google'

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement"></a>

```typescript
import { dataGoogleCloudIdentityGroupLookup } from '@cdktn/provider-google'

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudIdentityGroupLookup } from '@cdktn/provider-google'

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport"></a>

```typescript
import { dataGoogleCloudIdentityGroupLookup } from '@cdktn/provider-google'

dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleCloudIdentityGroupLookup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudIdentityGroupLookup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudIdentityGroupLookup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/cloud_identity_group_lookup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroupLookup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKey">groupKey</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference">DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKeyInput">groupKeyInput</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `groupKey`<sup>Required</sup> <a name="groupKey" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKey"></a>

```typescript
public readonly groupKey: DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference">DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `groupKeyInput`<sup>Optional</sup> <a name="groupKeyInput" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKeyInput"></a>

```typescript
public readonly groupKeyInput: DataGoogleCloudIdentityGroupLookupGroupKey;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupLookupConfig <a name="DataGoogleCloudIdentityGroupLookupConfig" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupLookup } from '@cdktn/provider-google'

const dataGoogleCloudIdentityGroupLookupConfig: dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.groupKey">groupKey</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | group_key block. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupKey`<sup>Required</sup> <a name="groupKey" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.groupKey"></a>

```typescript
public readonly groupKey: DataGoogleCloudIdentityGroupLookupGroupKey;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

group_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/cloud_identity_group_lookup#group_key DataGoogleCloudIdentityGroupLookup#group_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupLookupGroupKey <a name="DataGoogleCloudIdentityGroupLookupGroupKey" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupLookup } from '@cdktn/provider-google'

const dataGoogleCloudIdentityGroupLookupGroupKey: dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.id">id</a></code> | <code>string</code> | The ID of the entity. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.namespace">namespace</a></code> | <code>string</code> | The namespace in which the entity exists. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the entity.

For Google-managed entities, the id should be the email address of an existing group or user.
For external-identity-mapped entities, the id must be a string conforming to the Identity Source's requirements.
Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity such as a Google user or a Google Group.
If specified, the EntityKey represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of identitysources/{identity_source}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/cloud_identity_group_lookup#namespace DataGoogleCloudIdentityGroupLookup#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference <a name="DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupLookup } from '@cdktn/provider-google'

new dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudIdentityGroupLookupGroupKey;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---



