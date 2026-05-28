# `dataGoogleCloudIdentityPolicy` Submodule <a name="`dataGoogleCloudIdentityPolicy` Submodule" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityPolicy <a name="DataGoogleCloudIdentityPolicy" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_identity_policy google_cloud_identity_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicy } from '@cdktn/provider-google'

new dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy(scope: Construct, id: string, config: DataGoogleCloudIdentityPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig">DataGoogleCloudIdentityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig">DataGoogleCloudIdentityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudIdentityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isConstruct"></a>

```typescript
import { dataGoogleCloudIdentityPolicy } from '@cdktn/provider-google'

dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleCloudIdentityPolicy } from '@cdktn/provider-google'

dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudIdentityPolicy } from '@cdktn/provider-google'

dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleCloudIdentityPolicy } from '@cdktn/provider-google'

dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleCloudIdentityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudIdentityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudIdentityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_identity_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.customer">customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.policyQuery">policyQuery</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList">DataGoogleCloudIdentityPolicyPolicyQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.setting">setting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

---

##### `policyQuery`<sup>Required</sup> <a name="policyQuery" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.policyQuery"></a>

```typescript
public readonly policyQuery: DataGoogleCloudIdentityPolicyPolicyQueryList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList">DataGoogleCloudIdentityPolicyPolicyQueryList</a>

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.setting"></a>

```typescript
public readonly setting: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityPolicyConfig <a name="DataGoogleCloudIdentityPolicyConfig" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicy } from '@cdktn/provider-google'

const dataGoogleCloudIdentityPolicyConfig: dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.name">name</a></code> | <code>string</code> | The resource name of the policy to retrieve. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_identity_policy#id DataGoogleCloudIdentityPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the policy to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_identity_policy#name DataGoogleCloudIdentityPolicy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloud_identity_policy#id DataGoogleCloudIdentityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityPolicyPolicyQuery <a name="DataGoogleCloudIdentityPolicyPolicyQuery" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQuery.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicy } from '@cdktn/provider-google'

const dataGoogleCloudIdentityPolicyPolicyQuery: dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQuery = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityPolicyPolicyQueryList <a name="DataGoogleCloudIdentityPolicyPolicyQueryList" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicy } from '@cdktn/provider-google'

new dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.get"></a>

```typescript
public get(index: number): DataGoogleCloudIdentityPolicyPolicyQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudIdentityPolicyPolicyQueryOutputReference <a name="DataGoogleCloudIdentityPolicyPolicyQueryOutputReference" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityPolicy } from '@cdktn/provider-google'

new dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.orgUnit">orgUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.sortOrder">sortOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQuery">DataGoogleCloudIdentityPolicyPolicyQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `orgUnit`<sup>Required</sup> <a name="orgUnit" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.orgUnit"></a>

```typescript
public readonly orgUnit: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.sortOrder"></a>

```typescript
public readonly sortOrder: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudIdentityPolicyPolicyQuery;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudIdentityPolicy.DataGoogleCloudIdentityPolicyPolicyQuery">DataGoogleCloudIdentityPolicyPolicyQuery</a>

---



