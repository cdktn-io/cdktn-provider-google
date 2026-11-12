# `dataGoogleRedisClusterTokenAuthUser` Submodule <a name="`dataGoogleRedisClusterTokenAuthUser` Submodule" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleRedisClusterTokenAuthUser <a name="DataGoogleRedisClusterTokenAuthUser" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/redis_cluster_token_auth_user google_redis_cluster_token_auth_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.Initializer"></a>

```typescript
import { dataGoogleRedisClusterTokenAuthUser } from '@cdktn/provider-google'

new dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser(scope: Construct, id: string, config: DataGoogleRedisClusterTokenAuthUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig">DataGoogleRedisClusterTokenAuthUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig">DataGoogleRedisClusterTokenAuthUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleRedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isConstruct"></a>

```typescript
import { dataGoogleRedisClusterTokenAuthUser } from '@cdktn/provider-google'

dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isTerraformElement"></a>

```typescript
import { dataGoogleRedisClusterTokenAuthUser } from '@cdktn/provider-google'

dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isTerraformDataSource"></a>

```typescript
import { dataGoogleRedisClusterTokenAuthUser } from '@cdktn/provider-google'

dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.generateConfigForImport"></a>

```typescript
import { dataGoogleRedisClusterTokenAuthUser } from '@cdktn/provider-google'

dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleRedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleRedisClusterTokenAuthUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleRedisClusterTokenAuthUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/redis_cluster_token_auth_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleRedisClusterTokenAuthUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleRedisClusterTokenAuthUserConfig <a name="DataGoogleRedisClusterTokenAuthUserConfig" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.Initializer"></a>

```typescript
import { dataGoogleRedisClusterTokenAuthUser } from '@cdktn/provider-google'

const dataGoogleRedisClusterTokenAuthUserConfig: dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.cluster">cluster</a></code> | <code>string</code> | The name or resource ID of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.userId">userId</a></code> | <code>string</code> | The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/redis_cluster_token_auth_user#id DataGoogleRedisClusterTokenAuthUser#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/redis_cluster_token_auth_user#project DataGoogleRedisClusterTokenAuthUser#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.region">region</a></code> | <code>string</code> | The name of the region of the Redis cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The name or resource ID of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/redis_cluster_token_auth_user#cluster DataGoogleRedisClusterTokenAuthUser#cluster}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/redis_cluster_token_auth_user#user_id DataGoogleRedisClusterTokenAuthUser#user_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/redis_cluster_token_auth_user#id DataGoogleRedisClusterTokenAuthUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/redis_cluster_token_auth_user#project DataGoogleRedisClusterTokenAuthUser#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleRedisClusterTokenAuthUser.DataGoogleRedisClusterTokenAuthUserConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/data-sources/redis_cluster_token_auth_user#region DataGoogleRedisClusterTokenAuthUser#region}

---



