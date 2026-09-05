# `dataGoogleRedisClusterAclPolicy` Submodule <a name="`dataGoogleRedisClusterAclPolicy` Submodule" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleRedisClusterAclPolicy <a name="DataGoogleRedisClusterAclPolicy" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/redis_cluster_acl_policy google_redis_cluster_acl_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.Initializer"></a>

```typescript
import { dataGoogleRedisClusterAclPolicy } from '@cdktn/provider-google'

new dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy(scope: Construct, id: string, config: DataGoogleRedisClusterAclPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig">DataGoogleRedisClusterAclPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig">DataGoogleRedisClusterAclPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleRedisClusterAclPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isConstruct"></a>

```typescript
import { dataGoogleRedisClusterAclPolicy } from '@cdktn/provider-google'

dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleRedisClusterAclPolicy } from '@cdktn/provider-google'

dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleRedisClusterAclPolicy } from '@cdktn/provider-google'

dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleRedisClusterAclPolicy } from '@cdktn/provider-google'

dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleRedisClusterAclPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleRedisClusterAclPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleRedisClusterAclPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/redis_cluster_acl_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleRedisClusterAclPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList">DataGoogleRedisClusterAclPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.aclPolicyIdInput">aclPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.aclPolicyId">aclPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.rules"></a>

```typescript
public readonly rules: DataGoogleRedisClusterAclPolicyRulesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList">DataGoogleRedisClusterAclPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `aclPolicyIdInput`<sup>Optional</sup> <a name="aclPolicyIdInput" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.aclPolicyIdInput"></a>

```typescript
public readonly aclPolicyIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `aclPolicyId`<sup>Required</sup> <a name="aclPolicyId" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.aclPolicyId"></a>

```typescript
public readonly aclPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleRedisClusterAclPolicyConfig <a name="DataGoogleRedisClusterAclPolicyConfig" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleRedisClusterAclPolicy } from '@cdktn/provider-google'

const dataGoogleRedisClusterAclPolicyConfig: dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.aclPolicyId">aclPolicyId</a></code> | <code>string</code> | The logical name of the ACL policy in the customer project with the following restrictions:. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/redis_cluster_acl_policy#id DataGoogleRedisClusterAclPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/redis_cluster_acl_policy#project DataGoogleRedisClusterAclPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aclPolicyId`<sup>Required</sup> <a name="aclPolicyId" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.aclPolicyId"></a>

```typescript
public readonly aclPolicyId: string;
```

- *Type:* string

The logical name of the ACL policy in the customer project with the following restrictions:.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the customer project / location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/redis_cluster_acl_policy#acl_policy_id DataGoogleRedisClusterAclPolicy#acl_policy_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/redis_cluster_acl_policy#id DataGoogleRedisClusterAclPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/redis_cluster_acl_policy#location DataGoogleRedisClusterAclPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/redis_cluster_acl_policy#project DataGoogleRedisClusterAclPolicy#project}.

---

### DataGoogleRedisClusterAclPolicyRules <a name="DataGoogleRedisClusterAclPolicyRules" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRules.Initializer"></a>

```typescript
import { dataGoogleRedisClusterAclPolicy } from '@cdktn/provider-google'

const dataGoogleRedisClusterAclPolicyRules: dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRules = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleRedisClusterAclPolicyRulesList <a name="DataGoogleRedisClusterAclPolicyRulesList" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.Initializer"></a>

```typescript
import { dataGoogleRedisClusterAclPolicy } from '@cdktn/provider-google'

new dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.get"></a>

```typescript
public get(index: number): DataGoogleRedisClusterAclPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleRedisClusterAclPolicyRulesOutputReference <a name="DataGoogleRedisClusterAclPolicyRulesOutputReference" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.Initializer"></a>

```typescript
import { dataGoogleRedisClusterAclPolicy } from '@cdktn/provider-google'

new dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRules">DataGoogleRedisClusterAclPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleRedisClusterAclPolicyRules;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleRedisClusterAclPolicy.DataGoogleRedisClusterAclPolicyRules">DataGoogleRedisClusterAclPolicyRules</a>

---



